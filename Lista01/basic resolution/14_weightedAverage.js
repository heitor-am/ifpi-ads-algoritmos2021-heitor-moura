// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let n1 = Number(input('Digite a 1° nota: ')),
    p1 = Number(input('Digite o peso da 1° nota: ')),
    n2 = Number(input('Digite a 2° nota: ')),
    p2 = Number(input('Digite o peso da 2° nota: ')),
    n3 = Number(input('Digite a 3° nota: ')),
    p3 = Number(input('Digite o peso da 3° nota: '));

// Process
let weightedAverage = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

// Output
console.log(`-----\nMédia ponderada: ${weightedAverage.toFixed(2)}`);