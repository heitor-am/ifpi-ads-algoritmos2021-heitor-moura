// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let a = Number(input('Informe o valor do coeficiente A: ')),
  b = Number(input('Informe o valor do coeficiente B: ')),
  c = Number(input('Informe o valor do coeficiente C: ')),
  d = Number(input('Informe o valor do coeficiente D: ')),
  e = Number(input('Informe o valor do coeficiente E: ')),
  f = Number(input('Informe o valor do coeficiente F: '));

// Process
let x = (c * e - b * f) / (a * e - b * d),
  y = (a * f - c * d) / (a * e - b * d);

// Output
console.log(`-----\nValor de x: ${x.toFixed(2)}\nValor de y: ${y.toFixed(2)}`);