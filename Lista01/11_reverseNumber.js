const input = require('prompt-sync')();

// Input
let number = input('Digite um número de 3 dígitos: ');

// Process
let result = number.split('').reverse().join('');

// Output
console.log(`-----\nResultado: ${result}`);