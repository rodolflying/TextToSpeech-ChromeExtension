document.getElementById('readText').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "readSelectedText"});
});
