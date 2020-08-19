$(function () {
  $(".flip").flip({
    trigger: "hover",
    axis: "y",
  });
});
//RED BORDER ON INVALID INPUT
document.getElementById("contact-me").addEventListener(
  "invalid",
  function (event) {
    this.classList.add("check");
  },
  true
);

// TEXT AREA AUTO EXPAND
var textarea = document.querySelector("textarea.autoexpand");

textarea.addEventListener("keydown", autosize);

function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = "height:auto; padding: 1.4rem .2rem .5rem";

    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

document.getElementById("nav-toggle").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};
