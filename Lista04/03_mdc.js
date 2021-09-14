// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  const n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  let i = 1,
    mdc = 1;

  // Iteration
  while (i <= n1 && i <= n2) {
    if (n1 % i === 0 && n2 % i === 0) mdc *= i;

    i++;
  }

  // Output
  console.log(`\nMDC: ${mdc}`);
}

main();