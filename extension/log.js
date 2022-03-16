alert("pls work");
chrome.runtime.sendMessage({greeting: "hello"}, (response) => {
    console.log(response.farewell);
  });