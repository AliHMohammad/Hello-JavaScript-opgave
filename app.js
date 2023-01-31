document.querySelector("#OKKnap").addEventListener("click", sigHej);

function sigHej() {
  let udfyldt = false;
  let navn = document.querySelector("#navn").value;
  let alder = document.querySelector("#alder").value;
  let email = document.querySelector("#email").value;

  if (!navn) {
    document.querySelector("#resultat").textContent = "Navn er ugyldigt";
  } else if (!alder || alder < 1 || alder > 100) {
    document.querySelector("#resultat").textContent = "Alder er ugyldigt";   
  } else if (!email) {
    document.querySelector("#resultat").textContent = "Email er ugyldigt"; 
  } else {
    document.querySelector("#resultat").textContent = `Hej ${navn}! Du er ${alder} gammel, og din E-mail er ${email}`;
    udfyldt = true;
  }

  if (alder >= 30 && udfyldt) {
    document.querySelector("#alderTekst").textContent = "Du er meget gammel!"
  } else if (alder <= 29 && alder > 0 && udfyldt) {
    document.querySelector("#alderTekst").textContent = "Du er meget ung!"
  } else {
    document.querySelector("#alderTekst").textContent = null;
  }
}