const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  
  if (!e.target.classList.contains("card")) return;

  
  const cards = container.children;
  for (let card of cards) {
    card.classList.remove("active");
  }

 
  e.target.classList.add("active");
});