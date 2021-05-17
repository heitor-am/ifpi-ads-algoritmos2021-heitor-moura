const input = require('prompt-sync')();

// Input
let base = Number(input('Base do triângulo: ')),
    height = Number(input('Altura do triângulo: '));

// Process
let area = (base*height)/2;

// Output
console.log(`-----\nÁrea do triângulo: ${area}`);