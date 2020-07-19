// background.js

function sendCopyRequest(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "COPY" });
    });
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    sendCopyRequest()
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === "copy") {
        sendCopyRequest()
    }
});
