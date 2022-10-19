"use strict";
// ----------------\\
// * NAVBAR TOGGLE
// ? toggles the menu when button is clicked
// ----------------\\

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

// * toggle the navbar when click any navbar link
// ? toggle the menu when a link is clicked

const navBarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navBarLinks.length; i++) {
  navBarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

// ---------------\\
// * BACK TO TOP & HEADER
// ? button not visible top of page, only visible when scrolled down
// ---------------\\
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  // top of page and higher add active
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
