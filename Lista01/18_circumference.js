const input = require('prompt-sync')();

// Input
let radius = input('Informe o raio da circunferência: ');

// Process
let length = 2 * 3.14 * radius;

// Output
console.log(`-----\nComprimento da circunferência: ${length.toFixed(2)}`);