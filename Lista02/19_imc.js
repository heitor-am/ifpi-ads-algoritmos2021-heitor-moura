// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### IMC ###\n');

  // Read the user's input
  let height = Number(input('Altura (m): ')),
    weight = Number(input('Peso (Kg): '));

  // Get the result
  let result = imc(height, weight);

  if (result < 25) {
    // Output: if the imc is less than 25
    console.log('\nPeso normal!')
  } else if (result >= 25 && result <= 30) {
    // Output: if the imc is between 25 and 30
    console.log('\nObeso!')
  } else {
    // Output: if the imc is greater than 30
    console.log('\nObesidade mórbida!')
  }
}

main();

// Calculate the IMC
function imc(h, w) {
  return w / h ** 2;
}