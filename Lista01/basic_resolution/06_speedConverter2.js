// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let speed = Number(input('Digite a velocidade (km/h): '));

// Process
speed /= 3.6;

// Output
console.log(`-----\nResultado: ${speed.toFixed(2)} m/s`);