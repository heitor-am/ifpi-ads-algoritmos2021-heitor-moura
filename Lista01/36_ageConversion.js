const input = require('prompt-sync')();

// Input
let [years, months, days] = input('Informe a idade da pessoa (anos, meses, dias): ').split(',');

// Process
days = Number(years)*360 + Number(months)*30 + Number(days);

// Output
console.log(`-----\nIsso corresponde a ${days} dia(s)!`);
