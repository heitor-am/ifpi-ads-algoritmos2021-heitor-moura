const input = require('prompt-sync')();

// Input
let productValue = Number(input('Informe o valor do produto: '));

// Process
let installments = Math.trunc((productValue / 3)),
  inputPayment = Math.trunc((productValue % 3) + p);

// Output
console.log(`-----\nValor da entrada: R$${i.toFixed(2)}`);
console.log(`Valor da 1° prestação: R$${p.toFixed(2)}`);
console.log(`Valor da 2° prestação: R$${p.toFixed(2)}`);