// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let time = Number(input('Informe o número de segundos (inteiro): '));

// Process
if (Number.isInteger(time)) {
  let hours = Math.trunc(time / 60 ** 2),
    minutes = Math.trunc(time / 60) % 60,
    seconds = time % 60;

  // Output
  console.log(`-----\n$Isso corresponde a ${hours} hora(s), ${minutes} minuto(s) e ${seconds} segundo(s)!`);
} else {
  // Alternative output
  console.log(`-----\nErro! Só digite números inteiros!`);
}