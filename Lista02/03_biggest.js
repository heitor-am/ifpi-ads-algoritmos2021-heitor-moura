// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Maior ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  // Get the result
  let result = biggest(n1, n2);

  // Output
  console.log(`\nMaior: ${result}`);
}

main();

// Check the biggest among the numbers read
function biggest(a, b) {
  return (a > b) ? a : b;
}