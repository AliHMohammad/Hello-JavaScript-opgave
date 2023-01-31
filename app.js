document.getElementById("OKKnap").addEventListener("click", sayHello);

function sayHello() {
  if (document.getElementById("navn").value) {
    document.getElementById("resultat").textContent = `Hej ${document.getElementById("navn").value}!`;
  } else {
    document.getElementById("resultat").textContent = "Skriv venligst dit navn. Prøv igen";
  }
}