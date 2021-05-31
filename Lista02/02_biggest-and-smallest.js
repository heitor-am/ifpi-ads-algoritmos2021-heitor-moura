// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Maior e menor ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  // Get the result
  let biggestResult = biggest(n1, n2),
    smallestResult = smallest(n1, n2);

  if (biggestResult !== smallestResult) {
    // Output
    console.log(`\nMaior: ${biggestResult}`);
    console.log(`Menor: ${smallestResult}`);
  } else {
    // Alternative output: if the numbers are equal
    console.log('\nOs números são iguais!')
  }
}

main();

// Check the biggest among the numbers read
function biggest(a, b) {
  return (a > b) ? a : b;
}

// Check the smallest among the numbers read
function smallest(a, b) {
  return (a < b) ? a : b;
}