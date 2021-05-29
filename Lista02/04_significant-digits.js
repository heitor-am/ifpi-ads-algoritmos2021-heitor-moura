// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Igual ou diferente ###');

  // Read the user's input
  let n = Number(input('Informe um número (2 dígitos): '));

  // Get the result
  let result = compareSignificantDigits(n);

  // Output
  console.log(result);
}

main();

// Check the equality between significant figures
function compareSignificantDigits(number) {
  let ten = Math.trunc(number / 10),
    unit = number % 10;

  if (ten === unit) return 'Algarismos iguais!';

  return 'Algarismos diferentes!';
}