// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let radius = Number(input('Informe o raio da circunferĂȘncia: '));

// Process
let length = 2 * 3.14 * radius;

// Output
console.log(`-----\nComprimento da circunferĂȘncia: ${length.toFixed(2)}`);