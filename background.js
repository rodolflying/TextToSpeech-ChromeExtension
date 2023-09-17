chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "readSelectedText") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentTab = tabs[0];
            if (chrome.scripting && chrome.scripting.executeScript) {
                chrome.scripting.executeScript({
                    target: {tabId: currentTab.id},
                    func: getSelectedText
                }, (results) => {
                    if (results && results[0] && results[0].result) {
                        var textChunks = chunkText(results[0].result, 150); // Split into chunks of 150 characters
                        var speakChunk = function() {
                            if (textChunks.length === 0) return;
                            var chunk = textChunks.shift();
                            chrome.tts.speak(chunk, {'voiceName': 'Google US English', 'onEvent': function(event) {
                                if (event.type === 'end') {
                                    speakChunk();
                                }
                            }});
                        };
                        speakChunk();
                    }
                });
            } else {
                console.error("chrome.scripting API is not available.");
            }
        });
    }
});

function getSelectedText() {
    console.log(window.getSelection().toString());
    return window.getSelection().toString();
}

function chunkText(text, maxLength) {
    var chunks = [];
    while (text.length > maxLength) {
        var index = text.lastIndexOf(' ', maxLength);
        var chunk = text.slice(0, index);
        chunks.push(chunk);
        text = text.slice(index);
    }
    chunks.push(text);
    return chunks;
}
