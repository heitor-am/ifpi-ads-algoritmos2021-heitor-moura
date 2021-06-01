// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Operações ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  console.log('Escolha uma opção:');
  console.log('[1] Adição');
  console.log('[2] Subtração');
  console.log('[3] Multiplicação');
  console.log('[4] Divisão');
  
  let operation = Number(input('=> ')),
    result;

  // Check the chosen operation and print the result
  switch (operation) {
    case 1:
      result = n1 + n2;
      console.log(`\nResultado: ${result}`);
      break;
    case 2:
      result = n1 - n2;
      console.log(`\nResultado: ${result}`);
      break;
    case 3:
      result = n1 * n2;
      console.log(`\nResultado: ${result}`);
      break;
    case 4:
      result = (n1 / n2).toFixed(2);
      console.log(`\nResultado: ${result}`);
      break;
    default:
      // Alternative output: if the chosen operation is invalid
      console.log('\nOperação inválida!');
  }
}

main();