// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  const number = Number(input('Informe um número: '));

  console.log('\nContinue informando números:')
  let i = Number(input('-> '));

  // Iteration
  while (i !== number) {
    i = Number(input('-> '));
  }
}

main();