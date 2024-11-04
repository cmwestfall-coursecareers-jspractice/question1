function returnTwoLargestValues(array) {
  let maxValue = -Infinity;
  let secondMaxValue = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      secondMaxValue = maxValue;
      maxValue = array[i];
    } else if (array[i] > secondMaxValue) {
      secondMaxValue = array[i];
    }
  }
  console.log([maxValue, secondMaxValue]);
}

returnTwoLargestValues([7, -2, 3, 4, 5, 1, 23, 23]);
