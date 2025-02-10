var typed = new Typed("#element", {
  strings: ["Ganesh Dutt", "Web Developer", "Web Designer"],
  typeSpeed: 100,
  loop: true,
});

const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileNav = document.getElementById("mobileNav");

// Add a click event listener to the mobile menu icon
mobileMenuIcon.addEventListener("click", () => {
  // Toggle the visibility of the mobile navigation menu
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.add("transitionNav");
});
