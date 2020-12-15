// Fires when a request is about to occur.
// This event is sent before any TCP connection is made.

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {urls: ["*://www.bing.com/*"]},
  ["blocking"]
);