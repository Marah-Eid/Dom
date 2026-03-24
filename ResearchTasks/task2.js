


const card = document.createElement("div");


const image = document.createElement("img");
image.setAttribute("src", "pu.png");
image.setAttribute("alt", "Card image");
image.style.width = "300px";


const title = document.createElement("h2");
title.textContent = "Android Course";


const description = document.createElement("p");
description.textContent = "This is Android Course Description ";


card.appendChild(title);
card.appendChild(description);
card.appendChild(image);
document.body.appendChild(card);
