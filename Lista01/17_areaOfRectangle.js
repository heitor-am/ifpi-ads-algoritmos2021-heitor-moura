const input = require('prompt-sync')();

// Input
let base = Number(input('Base do retângulo: ')),
    height = Number(input('Altura do retângulo: '));

// Process
let area = base * height;

// Output
console.log(`-----\nÁrea do retângulo: ${area}`);