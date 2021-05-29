// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Números iguais ###');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: '));

  // Get the result
  let result = areEqual(n1, n2, n3);

  // Output
  console.log(result);
}

main();

// Check how many equal numbers exist between three numbers
function areEqual(a, b, c) {
  if (a === b && a === c) {
    return 'Os três números são iguais!';
  } else if (a === b || a === c || b === c) {
    return 'Há 2 números iguais!';
  } else {
    return 'Todos os números são diferentes!';
  }
}