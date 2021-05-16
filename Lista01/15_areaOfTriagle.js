const input = require('prompt-sync')();

// Input
let base = input('Base do triângulo: '),
    height = input('Altura do triângulo: ');

// Process
let area = (base*height)/2;

// Output
console.log(`-----\nÁrea do triângulo: ${area}`);