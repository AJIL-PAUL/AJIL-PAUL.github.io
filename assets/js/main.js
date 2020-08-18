jQuery(document).ready(function ($) {
  var contentSections = $(".cd-section"),
    navigationItems = $("#cd-vertical-nav a");

  updateNavigation();
  $(window).on("scroll", function () {
    updateNavigation();
  });

  //smooth scroll to the section
  navigationItems.on("click", function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });
  //smooth scroll to second section
  $(".cd-scrolltodown").on("click", function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  //open-close navigation on touch devices
  $(".touch .cd-nav-trigger").on("click", function () {
    $(".touch #cd-vertical-nav").toggleClass("open");
  });
  //close navigation on touch devices when selectin an elemnt from the list
  $(".touch #cd-vertical-nav a").on("click", function () {
    $(".touch #cd-vertical-nav").removeClass("open");
  });

  function updateNavigation() {
    contentSections.each(function () {
      $this = $(this);
      var activeSection =
        $('#cd-vertical-nav a[href="#' + $this.attr("id") + '"]').data(
          "number"
        ) - 1;
      if (
        $this.offset().top - $(window).height() / 2 < $(window).scrollTop() &&
        $this.offset().top + $this.height() - $(window).height() / 2 >
          $(window).scrollTop()
      ) {
        navigationItems.eq(activeSection).addClass("is-selected");
      } else {
        navigationItems.eq(activeSection).removeClass("is-selected");
      }
    });
  }

  function smoothScroll(target) {
    $("body,html").animate({ scrollTop: target.offset().top }, 600);
  }
});
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
