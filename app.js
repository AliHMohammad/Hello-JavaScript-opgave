document.getElementById("OKKnap").addEventListener("click", sayHello);

function sayHello() {
  if (document.querySelector("input").value) {
    document.querySelector("h3").textContent = `Hej ${document.querySelector("input").value}!`;
  } else {
    document.querySelector("h3").textContent = "Skriv venligst dit navn. Prøv igen";
  }
}