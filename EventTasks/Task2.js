const input = document.getElementById("input");
const pragraph = document.getElementById("preview");

input.addEventListener("input", (event) => {
  pragraph.textContent = event.target.value;
});