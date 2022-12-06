/* global chrome */
let generateComparisonButton = document.getElementById(
  "generateComparisonButton"
);
generateComparisonButton.addEventListener("click", generateComparison);

function generateComparison() {
  //   chrome.tabs.captureVisibleTab(null, {}, function (dataUrl) {
  //     sendResponse({ imgSrc: dataUrl });
  //   });

  imageURL = "";

  chrome.tabs.captureVisibleTab(null, {}, function (dataUrl) {
    // chrome.extension.getBackgroundPage().console.log(dataUrl);
    imageURL = dataUrl;
    chrome.tabs.create({
      url: "index.html",
      //  url: dataUrl,
    });

    //
  });

  chrome.extension.getBackgroundPage().console.log(imageURL);

  // Get current tab in order to get information about it
  //   chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
  //     activeTabId = tabArray[0].id;
  //     chrome.extension.getBackgroundPage().console.log("ID: " + activeTabId);
  //   });
}

//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   alert("HELLO");

//   return tab;

function routeToNewTab() {
  chrome.tabs.create({
    url: "index.html",
  });
  // alert("HELLO");
}

function getURLOfCurrentTab() {
  url = null;
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      var tabURL = tabs[0].url;
      return tabURL;
      url = tabURL;
    }
  );
  // return url;
}
