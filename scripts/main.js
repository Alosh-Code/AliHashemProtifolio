console.log("This Website Made By @AliHashem Html, Css, Javascript");

function clear() {
  document.getElementById("Name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Measseage").value = "";
}

document.getElementById("Clear").addEventListener("click", clear);
