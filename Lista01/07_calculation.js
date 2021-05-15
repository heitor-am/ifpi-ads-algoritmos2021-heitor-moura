const input = require('prompt-sync')()

// Input
let number1 = Number(input('Digite o primeiro número: ')),   
    number2 = Number(input('Digite o segundo número: ')),
    number3 = Number(input('Digite o terceiro número: '));

// Process
let sum = number1 + number2,
    difference = number2 - number3;

// Output
console.log(`-----\nSoma de ${number1} e ${number2}: ${sum}`);
console.log(`Diferença entre ${number2} e ${number3}: ${difference}`);