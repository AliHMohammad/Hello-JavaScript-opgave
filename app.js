const navn = prompt("Indtast venligst dit navn");

if (navn) {
  document.write(`Hej ${navn}!`);
} else {
  document.write(`Indtast venligst dit navn. Genindlæs siden`);
}
