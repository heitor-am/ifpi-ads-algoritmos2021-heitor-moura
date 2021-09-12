// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  const number = Number(input('Informe um número: '));

  let i = number,
    dividers = [];

  // Iteration
  while (i !== 0) {
    if (number % i === 0) dividers.unshift(i);
    
    i--;
  }

  // Output
  console.log(`\nDivisores de ${number}: ${dividers.join(', ')}`);
}

main();