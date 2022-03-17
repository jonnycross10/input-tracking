//TODO initialize data structure to store keys

chrome.runtime.onInstalled.addListener(() => {
    //TODO set key storage var to empty
    console.log('hi');
    logKeys();
    keyRecvr();
});

function logKeys(){
    console.log("success");
}


function keyRecvr() {
    chrome.runtime.onMessage.addListener(
        function(request, sender,sendResponse){
            //takes req, sender info, and sendResp function takes a message json
            //TODO call a function and pass it key. The function should add it to the storage var
            console.log(request.keyVal);
            sendResponse({resp:"received key"})
        }
    );
}