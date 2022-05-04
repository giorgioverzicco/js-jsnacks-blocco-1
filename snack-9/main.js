// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [1, 2, 3, 4, 5, 6];
const arr1 = [];
const arr2 = [];

for (let i = 0; i < Math.floor(Math.random() * 100) + 10; i++) {
  const rand = Math.floor(Math.random() * 100) + 1;
  arr1.push(rand);
}

for (let i = 0; i < Math.floor(Math.random() * 100) + 10; i++) {
  const rand = Math.floor(Math.random() * 100) + 1;
  arr2.push(rand);
}

while (arr1.length !== arr2.length) {
  const rand = Math.floor(Math.random() * 100) + 1;
  if (arr1.length < arr2.length) {
    arr1.push(rand);
  } else {
    arr2.push(rand);
  }
}
