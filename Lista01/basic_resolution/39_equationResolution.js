// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let a = Number(input('Informe o valor de A: ')),
  b = Number(input('Informe o valor de B: ')),
  c = Number(input('Informe o valor de C: '));

// Process
let r = (a + b) ** 2;
s = (b + c) ** 2;
d = (r + s) / 2;

// Output
console.log(`-----\nResultado: ${d}`);