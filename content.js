document.getElementById('readText').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "getSelectedText"}, function(response) {
            if (response && response.text) {
                chrome.runtime.sendMessage({text: response.text});
            }
        });
    });
});
