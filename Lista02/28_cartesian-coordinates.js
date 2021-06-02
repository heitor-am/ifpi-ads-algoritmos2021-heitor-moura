// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Coordenadas cartesianas ###\n');

  // Read the user's input
  console.log('[1° ponto]');
  let x1 = Number(input('Informe o valor de X: ')),
    y1 = Number(input('Informe o valor de Y: '));

  console.log('\n[2° ponto]');
  let x2 = Number(input('Informe o valor de X: ')),
    y2 = Number(input('Informe o valor de Y: '));

  // Calculate the area
  let area = Math.abs(x1 - x2) * Math.abs(y1 - y2);

  // Output
  console.log(`\nÁrea do retângulo formado: ${area}`)
}

main();