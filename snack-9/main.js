const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6];

for (let i = 0; arr1.length !== arr2.length; i++) {
  const rand = Math.floor(Math.random() * 100) + 1;
  if (arr1.length < arr2.length) {
    arr1.push(rand);
  } else {
    arr2.push(rand);
  }
}
