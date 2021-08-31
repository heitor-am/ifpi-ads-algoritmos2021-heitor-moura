const { calculateAverage, findBiggest, findSmallest, positiveNumbers, negativeNumbers, hasRepetition } = require('./modules');
const input = require('prompt-sync')();

function main() {
  const numbers = input('Digite os números (separados por vírgula): ').split(',').map(Number);

  let repetition = hasRepetition(numbers) ? 'Sim' : 'Não';

  console.log('\n##### Resultado #####');
  console.log(`Média dos valores: ${calculateAverage(numbers).toFixed(2)}`);
  console.log(`Maior valor: ${findBiggest(numbers)}`);
  console.log(`Menor valor: ${findSmallest(numbers)}`);
  console.log(`Quantidade de positivos: ${positiveNumbers(numbers)}`);
  console.log(`Quantidade de negativos: ${negativeNumbers(numbers)}`);
  console.log(`Há repetição: ${repetition}`);
}

main();