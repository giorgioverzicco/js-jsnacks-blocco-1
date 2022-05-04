const firstNames = ["Giorgio", "Giuseppe", "Mirko", "Nikolas"];
const lastNames = ["Verzicco", "Todisco", "Giannetta", "Mosca"];
const guests = [];

for (let i = 0; i < firstNames.length; i++) {
  const fullName = firstNames[i] + " " + lastNames[i];
  guests.push(fullName);
}
