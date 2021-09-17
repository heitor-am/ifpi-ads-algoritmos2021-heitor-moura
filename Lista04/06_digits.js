// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  const number = Number(input('Informe um número: '));

  let digits = 0,
    i = 1;

  // Iteration
  while (i <= number) {
    digits++;
    i *= 10;
  }

  // Output
  console.log(`\nDígitos: ${digits}`);
}

main();