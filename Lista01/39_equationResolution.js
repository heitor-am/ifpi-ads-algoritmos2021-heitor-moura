// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let [a, b, c] = input('Informe três números inteiros positivos (A, B, C): ').split(',').map(value => Number(value));

// Process
if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
  let r = (a + b) ** 2;
  s = (b + c) ** 2;
  d = (r + s) / 2;

  // Output
  console.log(`-----\nResultado: ${d}`);
} else {
  // Alternative output
  console.log(`-----\nErro! Só digite números inteiros!`);
}