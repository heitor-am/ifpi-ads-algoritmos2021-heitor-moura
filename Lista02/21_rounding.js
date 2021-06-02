// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Arredondamento ###\n');

  // Read the user's input
  let n = Number(input('Informe um número: '));

  // Get the result
  let result = rounding(n);

  // Output
  console.log(`\nNúmero arredondado: ${result}`);
}

main();

// Calculate the value of a number rounded to the nearest integer
function rounding(number) {
  let floatPart = number % 1,
  integerPart = Math.trunc(number);

  return (floatPart >= 0.5) ? ++integerPart : integerPart;
}