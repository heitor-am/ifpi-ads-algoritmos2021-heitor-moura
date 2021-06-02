// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Quadrado perfeito ###\n');

  // Read the user's input
  let n = input('Informe um número (4 dígitos): ');

  let sqrt = Math.sqrt(n),
   sum = Number(n[0] + n[1]) + Number(n[2] + n[3]);

  if (sqrt === sum) {
    console.log('\nÉ um quadrado perfeito!')
  } else {
    console.log('\nNão é um quadrado perfeito')
  }
}

main();