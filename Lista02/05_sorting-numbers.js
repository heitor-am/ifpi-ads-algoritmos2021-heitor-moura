// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Números em ordem crescente ###\n');

  // Read the user's input
  let a = Number(input('Informe o 1° número: ')),
    b = Number(input('Informe o 2° número: ')),
    c = Number(input('Informe o 3° número: '));

  // Sort the numbers
  let bigger, smaller, middle;

  if (a > b && a > c) {
    [bigger, middle, smaller] = (b < c) ? [a, c, b] : [a, b, c]
  } else if (a < b && a < c) {
    [bigger, middle, smaller] = (b > c) ? [b, c, a] : [c, b, a]
  } else {
    [bigger, middle, smaller] = (b > c) ? [b, a, c] : [c, a, b]
  }

  // Output
  console.log(`\nResultado: (${smaller}, ${middle}, ${bigger})`);
}

main();