const input = require('prompt-sync')();

// Input
let number1 = Number(input('Digite o primeiro número (inteiro): ')),
  number2 = Number(input('Digite o segundo número (inteiro): '));

// Process
if (Number.isInteger(number1) && Number.isInteger(number2)) {
  let quocient = Math.trunc(number1 / number2),
    remainder = number1 % number2;

  // Output
  console.log(`-----\nQuociente: ${quocient}`);
  console.log(`Resto: ${remainder}`);
} else {
  // Alternative output
  console.log(`-----\nErro! Só digite números inteiros!`);
}