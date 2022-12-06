/* global chrome */

let b = document.getElementById("b");
b.addEventListener("click", f);

async function f() {
  chrome.extension.getBackgroundPage().console.log("foo");
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  chrome.extension.getBackgroundPage().console.log(tab);
  chrome.extension.getBackgroundPage().console.log("two");

  return tab;
}
