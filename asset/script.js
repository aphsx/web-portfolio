/* More details button */
const aboutSection = document.querySelector(".about-section");
const aboutToggle = document.querySelector(".about-toggle");
aboutToggle.addEventListener("click", () => {
  aboutSection.classList.toggle("expanded");
});

/* Vibration */
function vibrate() {
  navigator.vibrate(6);
}

// Zoom in up effect add in every social media button one by one
const socialMediaButtons = document.querySelectorAll(".social-media-links div");

// ON SCROLL REVEAL SMALL CARDS
ScrollReveal().reveal(socialMediaButtons, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9,
});

// On load name effect 
setTimeout(() => document.querySelector('.profile-name').classList.add('loaded'), 500);
