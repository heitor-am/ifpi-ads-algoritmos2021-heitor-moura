// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  // Read the user's input
  const n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  let i = 1,
    found = false;

  // Iteration
  while (!found) {
    if ((i % n1 === 0) && (i % n2 === 0)) {
      console.log(`\nMMC: ${i}`);
      found = true;
    }

    i++;
  }
}

main();