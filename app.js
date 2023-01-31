document.querySelector("#OKKnap").addEventListener("click", sigHej);

function sigHej() {
  let udfyldt = false;
  let alder = document.querySelector("#alder").value;
  if (!document.querySelector("#navn").value) {
    document.querySelector("#resultat").textContent = "Navn er ugyldigt";
  } else if (!alder || alder < 1) {
    document.querySelector("#resultat").textContent = "Alder er ugyldigt";   
  } else if (!document.querySelector("#email").value) {
    document.querySelector("#resultat").textContent = "Email er ugyldigt"; 
  } else {
    document.querySelector("#resultat").textContent = `Hej ${document.querySelector("#navn").value}! Du er ${document.querySelector("#alder").value} gammel, og din E-mail er ${document.querySelector("#email").value}`;
    udfyldt = true;
  }

  if (alder >= 30 && udfyldt) {
    document.querySelector("#uAreOld").textContent = "Du er meget gammel!"
  } else if (alder <= 29 && alder > 0 && udfyldt) {
    document.querySelector("#uAreOld").textContent = "Du er meget ung!"
  } else {
    document.querySelector("#uAreOld").textContent = null;
  }
}