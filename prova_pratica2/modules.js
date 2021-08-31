function calculateAverage(numbers) {
  let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum / numbers.length;
}

function findBiggest(numbers) {
  let biggest = numbers[0];

  for (n of numbers) {
    if (n > biggest) biggest = n;
  }

  return biggest;
}

function findSmallest(numbers) {
  let smallest = numbers[0];

  for (n of numbers) {
    if (n < smallest) smallest = n;
  }

  return smallest;
}

function positiveNumbers(numbers) {
  return numbers.filter(n => n > 0);
}

function negativeNumbers(numbers) {
  return numbers.filter(n => n < 0)
}

function hasRepetition(numbers) {
  for (n1 of numbers) {
    for (n2 of numbers) {
      if (n1 === n2) return true;
    }
  }

  return false;
}

module.exports = {
  calculateAverage,
  findBiggest,
  findSmallest,
  positiveNumbers,
  negativeNumbers,
  hasRepetition
}