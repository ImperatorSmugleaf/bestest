/* global chrome */

let b = document.getElementById("b");
b.addEventListener("click", f);

function f() {
  chrome.tabs.create({
    url: "index.html",
  });
  // alert("HELLO");
}
