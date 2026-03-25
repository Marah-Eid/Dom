const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

  
  btn.classList.toggle("active");

  if (btn.classList.contains("active")) {
    btn.textContent = "Clicked";
  } else {
    btn.textContent = "Click";
  }

});