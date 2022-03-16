chrome.runtime.onInstalled.addListener(() => {
    console.log('hi');
    logKeys();
    addRecvr();
});

function logKeys(){
    console.log("success");
}

function addRecvr() {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension");
          if (request.greeting === "hello")
            sendResponse({farewell: "goodbye"});
        }
      );
}