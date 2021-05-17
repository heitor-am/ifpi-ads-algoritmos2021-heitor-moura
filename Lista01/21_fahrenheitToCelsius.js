const input = require('prompt-sync')();

// Input
let temperature = Number(input('Informe a temperatura em Fahrenheit: '));

// Process
temperature = (5 * temperature - 160)/9;

// Output
console.log(`-----\nTemperatura em Celsius: ${temperature.toFixed(2)}`);