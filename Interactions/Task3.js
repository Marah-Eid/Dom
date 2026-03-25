const btn=document.querySelector(".toggle-btn");
const content=document.querySelector(".content");

btn.addEventListener("click",()=>{
content.classList.toggle("hidden");
if(content.classList.contains("hidden")){
    btn.textContent="show";

}
else 
    btn.textContent="hide";


});