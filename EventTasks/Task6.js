const deacrese=document.getElementById("decrease");
const increase=document.getElementById("increase");
const countEl=document.getElementById("count");

let count = 0;


function updateCounter() {
  countEl.textContent = count;

  if (count > 0) {
    countEl.style.color = "green";
  } else if (count < 0) {
    countEl.style.color = "red";
  } else {
    countEl.style.color = "black";
  }
}


increase.addEventListener("click", () => {
  count++;
  updateCounter();
});


deacrese.addEventListener("click", () => {
  count--;
  updateCounter();
});