const input = require('prompt-sync')();

// Input
let number = input('Digite um número inteiro (4 dígitos): ');

// Process
if (Number.isInteger(Number(number))) {
  let sumOfDigits = Number(number[0]) + Number(number[1]) + Number(number[2]) + Number(number[3]);

  // Output
  console.log(`-----\nResultado: ${sumOfDigits}`);
} else {
  // Alternative output
  console.log(`-----\nErro! Só digite números inteiros!`);
}