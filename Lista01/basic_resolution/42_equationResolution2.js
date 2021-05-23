// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let x1 = Number(input('Informe a coordenada X do 1° ponto: ')),
  y1 = Number(input('Informe a coordenada Y do 1° ponto: ')),
  x2 = Number(input('Informe a coordenada X do 2° ponto: ')),
  y2 = Number(input('Informe a coordenada Y do 2° ponto: '));

// Process
let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// Output
console.log(`-----\nResultado: ${d.toFixed(2)}`);