// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let productValue = Number(input('Informe o valor do produto: '));

// Process
let installment = Math.trunc((productValue / 3)),
  paymentOfInput = Math.trunc((productValue % 3) + installment);

// Output
console.log(`-----\nValor da entrada: R$${paymentOfInput.toFixed(2)}`);
console.log(`Valor da 1° prestação: R$${installment.toFixed(2)}`);
console.log(`Valor da 2° prestação: R$${installment.toFixed(2)}`);