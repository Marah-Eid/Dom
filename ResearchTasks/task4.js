const container = document.getElementById("mrh");
const ul = container.children[0];

const old = ul.children[1]; 
const neww = document.createElement("li");
neww.textContent = "brand New";
ul.replaceChild(neww, old);
/** */
const first=ul.children[0];
first.textContent="hhhh";
/** */
first.classList.add("class1");

