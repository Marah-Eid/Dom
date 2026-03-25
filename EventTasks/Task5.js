const btn = document.getElementById("toggleBtn");
const section = document.getElementById("section");

btn.addEventListener("click", () => {
  section.classList.toggle("hidden");
});