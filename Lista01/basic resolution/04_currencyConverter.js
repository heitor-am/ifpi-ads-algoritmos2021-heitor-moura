// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let usd = Number(input('Digite o valor em dólar: '));

// Process
let brl = usd * 5.27;

// Output
console.log(`-----\nValor aproximado em real: R$${brl.toFixed(2)}`);