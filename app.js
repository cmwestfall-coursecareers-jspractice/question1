const givenArray = [1, 2, 3, 4, 5];

let maxValue = 0;

for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] > maxValue) {
    maxValue = givenArray[i];
  }
}

console.log(maxValue);
