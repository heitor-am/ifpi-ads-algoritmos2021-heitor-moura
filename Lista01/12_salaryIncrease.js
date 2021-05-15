const input = require('prompt-sync')();

// Input
let salary = Number(input('Digite o valor do salário: '));

// Process
salary += salary*0.25;

// Output
console.log(`-----\nSalário com aumento de 25%: R$${salary.toFixed(2)}`);