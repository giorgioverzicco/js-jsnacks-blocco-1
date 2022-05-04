let list = [];
for (let i = 0; i < 10; i++) {
  let userInput = Number(prompt("Inserisci un numero:"));
  alert(userInput % 2 ? `${userInput} è dispari` : `${userInput} è pari`);
}
