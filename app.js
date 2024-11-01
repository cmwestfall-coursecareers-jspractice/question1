const givenArray = [7, -2, 3, 4, 5, 1, 23, 23];

// in case of all negatives
let maxValue = -Infinity;
let secondMaxValue = -Infinity;

let answer = [];

for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] > maxValue) {
    secondMaxValue = maxValue;
    maxValue = givenArray[i];
  } else if (givenArray[i] <= maxValue && givenArray[i] > secondMaxValue) {
    secondMaxValue = givenArray[i];
  }
}

answer.push(maxValue, secondMaxValue);
console.log(answer);
