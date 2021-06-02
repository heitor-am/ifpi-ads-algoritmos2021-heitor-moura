// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Característica curiosa ###\n');

  // Read the user's input
  let n = input('Informe um número (4 dígitos): ');

  let sum = Number(n[0] + n[1]) + Number(n[2] + n[3]),
  pow = Math.pow(sum, 2);

  if (pow === +n) {
    console.log('\nObedece à característica!')
  } else {
    console.log('\nNão obedece à característica!')
  }
}

main();