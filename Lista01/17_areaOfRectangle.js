const input = require('prompt-sync')();

// Input
let base = input('Base do retângulo: '),
    height = input('Altura do retângulo: ');

// Process
let area = base*height;

// Output
console.log(`-----\nÁrea do retângulo: ${area}`);