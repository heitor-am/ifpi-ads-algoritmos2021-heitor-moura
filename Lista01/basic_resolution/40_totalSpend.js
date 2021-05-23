// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let years = Number(input('Informe a quantidade de anos desde começou a fumar: ')),
  price = Number(input('Informe o preço da carteira de cigarro: ')),
  quantify = Number(input('Informe o n° de cigarros fumados por dia: '));

// Process
let totalSpend = ((years * 365 * quantify) / 20) * price;

// Output
console.log(`-----\nGasto total: R$${totalSpend.toFixed(2)}`);