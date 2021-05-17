const input = require('prompt-sync')();

// Input
let number = input('Digite um número binário de 4 dígitos: ').split('').reverse();

// Process
let decimal = 0;
for (let i = 0; i < 4; i++) {
  decimal += Number(number[i] * 2**i);
}

// Output
console.log(`-----\nEquivalente em decimal: ${decimal}`);