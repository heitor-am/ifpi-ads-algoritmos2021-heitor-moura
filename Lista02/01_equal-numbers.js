// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Números iguais ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: '));

  // Check how many equal numbers exist between three numbers
  if (n1 === n2 && n1 === n3) {
    // Output: if are three numbers equal
    console.log('\nOs três números são iguais!');
  } else if (n1 === n2 || n1 === n3 || n2 === n3) {
    // Output: if are two numbers equal
    console.log('\nHá 2 números iguais!');
  } else {
    // Output: if all numbers are different
    console.log('\nTodos os números são diferentes!');
  }
}

main();