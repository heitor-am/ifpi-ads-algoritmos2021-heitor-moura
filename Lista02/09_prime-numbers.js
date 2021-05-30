// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Números primos até 100 ###');

  // Read the user's input
  let number = Number(input('Informe um número entre 0 e 100: '));

  if (number >= 0 && number <= 100) {
    if (isPrime(number)) {
      // Output: if the number is prime
      console.log('É primo!');
    } else {
      // Output: if the number isn't prime
      console.log('Não é primo!');
    }
  } else {
    // Output: if the number isn't between 0 and 100
    console.log('Só digite números entre 0 e 100!');
  }
}

main();

// Check if the number is prime (only for numbers less than 100)
function isPrime(n) {
  let isEqualTo = (n === 2) || (n === 3) || (n === 5) || (n === 7),
    isNotDivisibleBy = (n % 2 !== 0) && (n % 3 !== 0) && (n % 5 !== 0) && (n % 7 !== 0);

  return ((isNotDivisibleBy || isEqualTo) && n !== 1) ? true : false;
}