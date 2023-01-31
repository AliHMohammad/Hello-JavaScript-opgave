document.querySelector("button").addEventListener("click", sayHello);

function sayHello() {
  document.querySelector("h3").textContent = `Hej ${document.querySelector("input").value}!`;
}