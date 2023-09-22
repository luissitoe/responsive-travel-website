const header = document.getElementById("header"),
  navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navLinks = document.querySelectorAll(".nav__link");

/* Change header style on scroll
---------------------------------------*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// Close the nav menu when the user clicks on each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
    changeIcon();
  });
});

// change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-line");
  }
}

// activate nav link on scroll
function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 120,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*= " + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*= " + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", addActiveLink);

/* Play and Pause Video 
---------------------------------------*/
const video = document.getElementById("video-background"),
  videoBtn = document.getElementById("video-btn"),
  videoIcon = document.getElementById("video-icon");

function playPauseVideo() {
  if (video.paused) {
    video.play();
    videoIcon.classList.replace("ri-play-fill", "ri-pause-line");
  } else {
    video.pause();
    videoIcon.classList.replace("ri-pause-line", "ri-play-fill");
  }
}

// Replace the pause icon when the video ends
video.addEventListener("ended", () => {
  videoIcon.classList.replace("ri-pause-line", "ri-play-fill");
});

videoBtn.addEventListener("click", playPauseVideo);

/* 
Scrolltop 
----------------------------------------------*/
const scrollTop = document.getElementById("scrolltop");

function showScrollTop() {
  if (window.scrollY > 180) {
    scrollTop.classList.add("scrolltop--show");
  } else {
    scrollTop.classList.remove("scrolltop--show");
  }
}

window.addEventListener("scroll", showScrollTop);

/* 
ScrollReveal
----------------------------------------------*/
const sr = ScrollReveal({
  distance: "100px",
  duration: 2000,
  delay: 400,
  reset: false,
});

sr.reveal(
  ".home__content, .how__item, .explore__item, .reservation__item, .blog__item, .testimonial__item, .footer__item",
  { interval: 100 }
);
