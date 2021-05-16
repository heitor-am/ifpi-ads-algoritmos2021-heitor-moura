const input = require('prompt-sync')();

// Input
console.log('OBS: Separe os valores por vírgula!');
let [n1,n2,n3] = input('Digite as notas: ').split(','),
    [p1,p2,p3] = input('Digite os pesos: ').split(',');

// Process
let weightedAverage = (n1*p1+n2*p2+n3*p3)/(Number(p1)+Number(p2)+Number(p3));

// Output
console.log(`-----\nMédia ponderada: ${weightedAverage.toFixed(2)}`);