const input = require('prompt-sync')()

// Input
let speed = Number(input('Digite a velocidade (m/s): '));

// Process
speed *= 3.6;

// Output
console.log(`Resultado (km/h): ${speed.toFixed(2)}`);