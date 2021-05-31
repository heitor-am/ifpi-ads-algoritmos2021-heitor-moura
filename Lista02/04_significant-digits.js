// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Comparação entre algarismos ###\n');

  // Read the user's input
  let n = Number(input('Informe um número (2 dígitos): '));

  // Get the result
  let result = equalSignificantDigits(n);

  if (result) {
    // Output: if the significant figures are equal
    console.log('\nAlgarismos iguais!');
  } else {
    // Output: if the significant figures aren't equal
    console.log('\nAlgarismos diferentes!');
  }
}

main();

// Check the equality between significant figures
function equalSignificantDigits(number) {
  let ten = Math.trunc(number / 10),
    unit = number % 10;

  return (ten === unit) ? true : false;
}