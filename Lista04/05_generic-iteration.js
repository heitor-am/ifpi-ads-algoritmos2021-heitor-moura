// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  let x = Number(input('Informe o valor de X: ')),
    n = Number(input('Informe o valor de N: '));

  // Iteration
  while (n > 2) {
    x /= n;
    console.log(x);

    n--;
  }
}

main();