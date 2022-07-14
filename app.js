
function click_sortbar() {
  document.getElementById("sortbar").style.display = "none";
  document.getElementById("cancel").style.display = "block";
  document.getElementById("fullpage").style.width = "100%";

}

function click_cancel() {
  document.getElementById("sortbar").style.display = "block";
  document.getElementById("cancel").style.display = "none";
  document.getElementById("fullpage").style.width = "0";
}

function click_list_menu() {
  document.getElementById("sortbar").style.display = "block";
  document.getElementById("cancel").style.display = "none";
  document.getElementById("fullpage").style.width = "0";
}

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}