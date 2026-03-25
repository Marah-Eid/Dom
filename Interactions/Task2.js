const countrySelect = document.getElementById("country");
const flag = document.getElementById("flag");

countrySelect.addEventListener("change", (e) => {
  const country = e.target.value;

   if (country === "france") {
    flag.src = "fr.png";
  } else if (country === "germany") {
    flag.src = "https://flagcdn.com/w320/de.png";
  } else {
    flag.src = "";
  }
});