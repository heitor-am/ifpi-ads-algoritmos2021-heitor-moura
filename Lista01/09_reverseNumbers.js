const input = require('prompt-sync')();

// Input
let number = input('Digite 2 números (A, B): ');

// Output
console.log(`-----\nResultado: (${number.split('').reverse().join('')})`);