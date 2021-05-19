const input = require('prompt-sync')();

// Input
let initialPrice = Number(input('Informe o custo de fábrica do carro: '));

// Process
let finalPrice = initialPrice + (initialPrice*0.28) + (initialPrice*0.45); 

// Output
console.log(`-----\nPreço final: R$${finalPrice.toFixed(2)}`);