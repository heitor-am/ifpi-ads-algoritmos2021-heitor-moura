const input = require('prompt-sync')();

// Input
let years = Number(input('Informe a quantidade de anos desde começou a fumar: ')),
  price = Number(input('Informe o preço da carteira de cigarro: ')),
  quantify = Number(input('Informe o n° de cigarros fumados por dia: '));

// Process
let quantifyPerDay = Math.trunc(quantify/20);
if (quantify%20 > 0) quantifyPerDay++;

let totalSpend = years*360 * (price*(quantifyPerDay));

// Output
console.log(`-----\nGasto total: R$${totalSpend.toFixed(2)}`);