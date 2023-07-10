//Adding Smooth Scroll to the nav menu section to the target section

var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault(); //prevents the default behavior of the navmenu links
    var targetSectionID = this.textContent.trim().toLowerCase();
    console.log(this.textContent);
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);

    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 20);
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= (1 / 6) * window.innerHeight) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}

//Add shooting skill bars animation

var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}

for (let bar of progressBars) {
  initialiseBar(bar);
}

function fillBar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}

// This function uses a for loop for individual progress bars.
function checkScroll() {
  for (let bar of progressBars) {
    let barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);
