// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Maior que a média ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: ')),
    n4 = Number(input('Informe o 4° número: ')),
    n5 = Number(input('Informe o 5° número: '));

  // Get the result
  let result = biggerThanAverage(n1, n2, n3, n4, n5);

  // Output
  console.log(`\nMaior que a média:${result}`);
}

main();

// Check bigger than average numbers
function biggerThanAverage(a, b, c, d, e) {
  let average = (a + b + c + d + e) / 5,
  numbers = '';

  if (a > average) numbers += ` ${a}`;
  if (b > average) numbers += ` ${b}`;
  if (c > average) numbers += ` ${c}`;
  if (d > average) numbers += ` ${d}`;
  if (e > average) numbers += ` ${e}`;

  return numbers;
}