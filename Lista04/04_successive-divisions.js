// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  const number = Number(input('Informe um número: '));

  let result = number / 2;

  // Iteration
  while (result >= 1) {
    result /= 2;
  }

  // Output
  console.log(`\nÚltima divisão: ${result}`);
}

main();