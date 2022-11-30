/* global chrome */

let b = document.getElementById("b");
b.addEventListener("click", f);

function f() {
  alert("hi");
  chrome.extension.getBackgroundPage().console.log("foo");
  //   let queryOptions = { active: true, lastFocusedWindow: true };
  //   // `tab` will either be a `tabs.Tab` instance or `undefined`.
  //   let [tab] = await chrome.tabs.query(queryOptions);
  //   console.log(tab);
  //   return tab;
}

// function f() {
//   chrome.tabs.create({
//     url: "index.html",
//   });
//   // alert("HELLO");
// }
