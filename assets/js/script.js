'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

  // Function to load and play Lottie animation
  function loadLottieAnimation() {
    const lottieContainer = document.getElementById("lottie-container");

    // Load the Lottie animation
    const animation = lottie.loadAnimation({
      container: lottieContainer,
      renderer: "svg", // You can choose the renderer (svg, canvas, html)
      loop: true,
      autoplay: true,
      path: "assets/json/hero-animation.json", // Replace with the actual path to your hero-banner.json file
    });
  }

  // Load the Lottie animation when the page is fully loaded
  document.addEventListener("DOMContentLoaded", loadLottieAnimation);

  const textElement = document.querySelector('.hero-title');
  const textContent = textElement.innerHTML;
  textElement.innerHTML = '';

  function typeWriterEffect() {
      let charIndex = 0;
      const typingSpeed = 50; // Adjust the speed as needed (lower value = faster typing)

      function type() {
          if (charIndex < textContent.length) {
              textElement.innerHTML += textContent.charAt(charIndex);
              charIndex++;
              setTimeout(type, typingSpeed);
          }
      }

      type();
  }

  // Call the typewriter effect when the window has loaded
  window.onload = typeWriterEffect;