const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const item = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const butt = document.createElement("button");
  butt.textContent = "Delete"; 
  butt.classList.add("delete");

  item.appendChild(span);
  item.appendChild(butt);
  list.appendChild(item);


});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const li = e.target.parentElement;
    li.remove();
  }
});

