// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let quantify = Number(input('Informe a quantidade de latão (em kg): '));

// Process
let quantifyOfCopper = quantify * 0.7,
  quantifyOfZinc = quantify * 0.3;

// Output
console.log(`-----\nQuantidade de cobre: ${quantifyOfCopper.toFixed(1)}kg\n`);
console.log(`Quantidade de zinco: ${quantifyOfZinc.toFixed(1)}kg`);