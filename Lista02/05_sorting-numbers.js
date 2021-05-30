// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Números em ordem crescente ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: '));

  // Get the result
  let result = sortNumbers(n1, n2, n3);

  // Output
  console.log(`\nResultado: ${result}`);
}

main();

// Sort three numbers (only for three numbers) 
function sortNumbers(a, b, c) {
  if (a < b) {
    if (b < c) {
      return `(${a}, ${b}, ${c})`;
    } else {
      if (a < c) {
        return `(${a}, ${c}, ${b})`;
      } else {
        return `(${c}, ${a}, ${b})`;
      }
    }
  } else {
    if (b < c) {
      if (a < c) {
        return `(${b}, ${a}, ${c})`;
      } else {
        return `(${b}, ${c}, ${a})`;
      }
    } else {
      return `(${c}, ${b}, ${a})`;
    }
  }
}