// Scroll Spy - Active menu update on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// Get Started Button Scroll
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});