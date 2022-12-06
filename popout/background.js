/* global chrome */
let b = document.getElementById("b");
b.addEventListener("click", f);

chrome.runtime.onMessage.addListener(function (
  sender,
  currentTab,
  sendResponse
) {
  chrome.tabs.captureVisibleTab(sender, { currentTab }, function (dataUrl) {
    sendResponse({ imgSrc: dataUrl });
  });
});
