// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Tratamento de condições ###\n');

  // Read the user's input
  let n1 = Number(input('Informe o 1° valor: ')),
    n2 = Number(input('Informe o 2° valor: '));

  let remainder = n1 % n2;

  switch (remainder) {
    case 1:
      result = (n1 + n2) + remainder;
      // Output: if the remainder is 1 
      console.log(`\nResultado: ${result}`);
      break;
    case 2:
      let resultN1 = (n1 % 2 === 0) ? 'Par' : 'Ímpar',
        resultN2 = (n2 % 2 === 0) ? 'Par' : 'Ímpar';
      // Output: if the remainder is 2
      console.log(`\nValor 1: ${resultN1}`);
      console.log(`Valor 2: ${resultN2}`);
      break;
    case 3:
      result = (n1 + n2) * n1;
      // Output: if the remainder is 3
      console.log(`\nResultado: ${result}`);
      break;
    case 4:
      result = (n1 + n2) / n2;
      // Output: if the remainder is 4
      console.log(`\nResultado: ${result}`);
      break;
    default:
      let powN1 = n1 ** 2,
        powN2 = n2 ** 2;

      // Output: if the remainder isn't none of the other numbers
      console.log(`\nQuadrado do 1° valor: ${powN1}`);
      console.log(`Quadrado do 2° valor: ${powN2}`)
  }
}

main();