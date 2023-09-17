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
                        // Get available voices and select a specific one
                        chrome.tts.getVoices(function(voices) {
                            // Uncomment the next lines if you want to print available voices to the console
                            // for (var i = 0; i < voices.length; i++) {
                            //     console.log(voices[i].voiceName);
                            // }
                            // Use a specific voice to read the text
                            // Replace 'Google US English' with the voice name you prefer
                            chrome.tts.speak(results[0].result, {'voiceName': 'Google US English'});
                        });
                    }
                });
            } else {
                console.error("chrome.scripting API is not available.");
            }
        });
    }
});

function getSelectedText() {
    return window.getSelection().toString();
}
