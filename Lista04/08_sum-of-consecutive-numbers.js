// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  const x = Number(input('Informe o valor de X: '));

  console.log('\nDigite os números: ')
  n1 = Number(input('-> '));
  n2 = Number(input('-> '));

  // Iteration
  while ((n1 + n2) !== x) {
    n1 = n2;
    n2 = Number(input('-> '));
  }
}

main();