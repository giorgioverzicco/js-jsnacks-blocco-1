const firstNames = ["Giorgio", "Giuseppe", "Mirko", "Nikolas"];
const lastNames = ["Verzicco", "Todisco", "Giannetta", "Mosca"];
const guests = [];

for (let i = 0; i < firstNames.length; i++) {
  const randFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const fullName = randFirstName + " " + randLastName;

  if (!guests.includes(fullName)) {
    guests.push(fullName);
  } else {
    i--;
  }
}
