
function click_sortbar() {
    var sortbar = document.getElementById("sortbar");
    var cancel = document.getElementById("cancel");
    var list_menu = document.getElementById("full page");
    if (sortbar.style.display === "block") {
        sortbar.style.display = "none";
        cancel.style.display = "block";
        list_menu.style.display = "block";
    }
    else {
        sortbar.style.display = "none";
        cancel.style.display = "block";
        list_menu.style.display = "block";
    }
}

function click_cancel() {
    var sortbar = document.getElementById("sortbar");
    var cancel = document.getElementById("cancel");
    var list_menu = document.getElementById("fullpage");
    if (cancel.style.display === "block") {
        cancel.style.display = "none";
        sortbar.style.display = "block";
        list_menu.style.display = "none";
    }
    // else {
    //     // cancel.style.display = "block";
    // }
}

function click_list_menu() {
    var sortbar = document.getElementById("sortbar");
    var cancel = document.getElementById("cancel");
    var list_menu = document.getElementById("fullpage");
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var education = document.getElementById("education");
    var portfolio = document.getElementById("portfolio");
    var contact = document.getElementById("contact");
    if (list_menu.style.display === "block") {
        cancel.style.display = "none";
        sortbar.style.display = "block";
        list_menu.style.display = "none";
    }
    // else {
    //     // cancel.style.display = "block";
    // }
}

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
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