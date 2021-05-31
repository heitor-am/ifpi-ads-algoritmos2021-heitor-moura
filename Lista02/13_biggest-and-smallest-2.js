// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Maior e menor 2 ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: ')),
    n4 = Number(input('Informe o 4° número: ')),
    n5 = Number(input('Informe o 5° número: '));

  // Get the result
  let biggestResult = biggest(n1, n2, n3, n4, n5),
    smallestResult = smallest(n1, n2, n3, n4, n5);

  // Output
  console.log(`\nMaior: ${biggestResult}`);
  console.log(`Menor: ${smallestResult}`);
}

main();

// Check the biggest among the numbers read
function biggest(a, b, c, d, e) {
  let bigger = a;

  if (b > bigger) bigger = b;
  if (c > bigger) bigger = c;
  if (d > bigger) bigger = d;
  if (e > bigger) bigger = e;

  return bigger;
}

// Check the smallest among the numbers read
function smallest(a, b, c, d, e) {
  let smaller = a;

  if (b < smaller) smaller = b;
  if (c < smaller) smaller = c;
  if (d < smaller) smaller = d;
  if (e < smaller) smaller = e;

  return smaller;
}