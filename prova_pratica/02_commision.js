// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Comissão ###\n');

  // Read the user's input
  let name = input('Informe o nome do vendedor: '),
    totalSales = Number(input('Informe o valor total de vendas dele no mês: '));

  let salary = 1100,
    commission;

  // Initialize the value of each range to 0
  let [rangeA, rangeB, rangeC, rangeD] = [0, 0, 0, 0]

  // Calculate the commission and the value of each range
  if (totalSales <= 5000) {
    commission = 0;
  } else if (totalSales > 5000 && totalSales <= 10000) {
    rangeB = commission = (totalSales - 5000) * 0.05;
  } else if (totalSales > 10000 && totalSales <= 30000) {
    commission = 5000 * 0.05 + (totalSales - 10000) * 0.1;
    [rangeB, rangeC] = [
      5000 * 0.05,
      (totalSales - 10000) * 0.1
    ]
  } else if (totalSales > 30000) {
    rangeD = commission = totalSales * 0.2;
  }

  // Output
  console.log(`\nParabéns, ${name}! Você ganhou uma comissão de R$${commission.toFixed(2)}.`);
  console.log(`Salário final: R$${(salary + commission).toFixed(2)}`);
  console.log(`\n* Comissão por cada faixa *`);
  console.log(`Faixa A (até R$5000): R$${rangeA}`);
  console.log(`Faixa B (R$5000 até R$10000): R$${rangeB}`);
  console.log(`Faixa C (R$10000 até R$30000): R$${rangeC}`);
  console.log(`Faixa D (acima de R$30000): R$${rangeD}`);
}

main();