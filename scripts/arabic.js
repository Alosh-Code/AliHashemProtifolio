console.log(
  "تم انشاء هذا الموقع بواسطه @AliHashem باستخدام Html Css Javascript"
);

function clear() {
  document.getElementById("Name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Measseage").value = "";
}

document.getElementById("Clear").addEventListener("click", clear);
