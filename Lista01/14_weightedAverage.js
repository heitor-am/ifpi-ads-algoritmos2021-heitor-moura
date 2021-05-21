// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
console.log('OBS: Separe os valores por vírgula!');
let [n1, n2, n3] = input('Digite as notas: ').split(',').map(value => Number(value)),
    [p1, p2, p3] = input('Digite os pesos: ').split(',').map(value => Number(value));

// Process
let weightedAverage = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

// Output
console.log(`-----\nMédia ponderada: ${weightedAverage.toFixed(2)}`);