// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let temperature = Number(input('Informe a temperatura em Celsius: '));

// Process
temperature = (9 * temperature + 160) / 5;

// Output
console.log(`-----\nTemperatura em Fahrenheit: ${temperature.toFixed(2)}`);