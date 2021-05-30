// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Par ou Ímpar ###\n');

  // Read the user's input
  let number = Number(input('Informe um número: '));

  // Get the result
  let result = isEven(number);

  if (result) {
    // Output: if the number is even
    console.log('\nÉ par!');
  } else {
    // Output: if the number is odd
    console.log('\nÉ ímpar!')
  }
}

main();

// Check how many equal numbers exist between three numbers
function isEven(n) {
  return (n % 2 === 0) ? true : false;
}