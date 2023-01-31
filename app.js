document.querySelector("#OKKnap").addEventListener("click", sigHej);

function sigHej() {
  let udfyldt = false;
  if (!document.querySelector("#navn").value) {
    document.querySelector("#resultat").textContent = "Navn er tomt";
  } else if (!document.querySelector("#alder").value) {
    document.querySelector("#resultat").textContent = "Alder er tomt";   
  } else if (!document.querySelector("#email").value) {
    document.querySelector("#resultat").textContent = "Email er tomt"; 
  } else {
    document.querySelector("#resultat").textContent = `Hej ${document.querySelector("#navn").value}! Du er ${document.querySelector("#alder").value} gammel, og din E-mail er ${document.querySelector("#email").value}`;
    udfyldt = true;
  }

  if (document.querySelector("#alder").value >= 30 && udfyldt) {
    document.querySelector("#uAreOld").textContent = "Du er meget gammel!"
  } else if (document.querySelector("#alder").value <= 29 && udfyldt) {
    document.querySelector("#uAreOld").textContent = "Du er meget ung!"
  } else {
    document.querySelector("#uAreOld").textContent = null;
  }
}