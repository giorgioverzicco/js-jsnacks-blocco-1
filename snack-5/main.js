let list = [];
for (let i = 0; i < 6; i++) {
  let userInput = Number(prompt("Inserisci un numero:"));
  if (userInput % 2) {
    list.push(userInput);
  }
}
