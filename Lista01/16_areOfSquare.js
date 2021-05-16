const input = require('prompt-sync')();

// Input
let side = input('Lado do quadrado: ');

// Process
let area = Math.pow(side, 2);

// Output
console.log(`-----\nÁrea do quadrado: ${area}`);