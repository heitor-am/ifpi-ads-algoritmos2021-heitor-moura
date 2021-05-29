// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Maior e menor ###');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  // Get the result
  let result = biggerAndSmaller(n1, n2);

  // Output
  console.log(result);
}

main();

// Check the biggest and smallest among the numbers read
function biggerAndSmaller(a, b) {
  if (a > b) {
    return `Maior: ${a}\nMenor: ${b}`;
  } else if (a < b) {
    return `Maior: ${b}\nMenor: ${a}`;
  } else {
    return 'Os números são iguais!';
  }
}