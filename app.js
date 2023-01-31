document.getElementById("OKKnap").addEventListener("click", sigHej);

function sigHej() {
  if (!document.getElementById("navn").value) {
    document.getElementById("resultat").textContent = "Navn er tomt";
  } else if (!document.getElementById("alder").value) {
    document.getElementById("resultat").textContent = "Alder er tomt";   
  } else if (!document.getElementById("email").value) {
    document.getElementById("resultat").textContent = "Email er tomt"; 
  } else {
    document.getElementById("resultat").textContent = `Hej ${document.getElementById("navn").value}! Du er ${document.getElementById("alder").value} gammel, og din email er ${document.getElementById("email").value}`; 
  }
}