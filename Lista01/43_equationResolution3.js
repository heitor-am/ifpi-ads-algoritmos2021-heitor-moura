const input = require('prompt-sync')();

// Input
let [a, b, c, d, e, f] = input('Informe os valores dos coeficientes (A, B, C, D, E, F): ').split(',');

// Process
let x = ((+c)*(+e) - (+b)*(+f)) / ((+a)*(+e) - (+b)*(+d)),
  y = ((+a)*(+f) - (+c)*(+d)) / ((+a)*(+e) - (+b)*(+d));

// Output
console.log(`-----\nValor de x: ${x.toFixed(2)}\nValor de y: ${y.toFixed(2)}`);