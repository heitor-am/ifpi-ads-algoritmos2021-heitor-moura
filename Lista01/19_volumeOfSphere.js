const input = require('prompt-sync')();

// Input
let radius = input('Informe o raio da esfera: ');

// Process
let volume = (4 * 3.14 * radius**3)/3;

// Output
console.log(`-----\nVolume da esfera: ${volume.toFixed(2)}`);