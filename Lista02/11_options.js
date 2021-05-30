// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Opções ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: ')),
    option = Number(input('Escolha uma opção (1, 2 ou 3): '));

  switch (option) {
    case 1:
      // When the result of option matches 1
      console.log(`\nResultado: ${n1}`);
      break;
    case 2:
      // When the result of option matches 2
      console.log(`\nResultado: ${n2}`);
      break;
    case 3:
      // When the result of option matches 3
      console.log(`\nResultado: ${n3}`);
      break;
    default:
      // When none of the values match the value of the option
      console.log('\nOpção inválida!');
  }
}

main();