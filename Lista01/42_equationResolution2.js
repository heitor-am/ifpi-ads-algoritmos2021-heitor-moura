// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let [x1, y1] = input('Informe as coordenadas do primeiro ponto (x1, y1): ').split(',').map(value => Number(value)),
  [x2, y2] = input('Informe as coordenadas do segundo ponto (x2, y2): ').split(',').map(value => Number(value));

// Process
let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// Output
console.log(`-----\nResultado: ${d.toFixed(2)}`);