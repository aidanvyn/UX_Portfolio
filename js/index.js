const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("navOverlay");
const closeButton = document.getElementById("closeButton");

window.addEventListener("load", function() {
	console.log("JS loaded");
});

menuToggle.addEventListener("click", function() {
    console.log("Menu opened");
    navLinks.classList.add("active");
    overlay.classList.add("active");
});

closeButton.addEventListener("click", function() {
    console.log("Menu closed");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});