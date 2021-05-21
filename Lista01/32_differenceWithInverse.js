// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number = input('Informe um número inteiro (3 dígitos): ');

// Process
if (Number.isInteger(Number(number))) {
  let result = Number(number) - Number(number.split('').reverse().join(''));

  // Output
  console.log(`-----\nResultado: ${result}`);
} else {
  // Alternative output
  console.log(`-----\nErro! Só digite números inteiros!`);
}