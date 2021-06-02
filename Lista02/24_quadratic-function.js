// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Equação de 2° grau ###\n');

  // Read the user's input
  let a = Number(input('Valor do coeficiente A: ')),
    b = Number(input('Valor do coeficiente B: ')),
    c = Number(input('Valor do coeficiente C: '));

  // Get the result
  let result = quadraticFunction(a, b, c);

  switch (result.length) {
    case 1:
      console.log('\nRaiz:')
      console.log(`x = ${result[0]}`);
      break;
    case 2:
      console.log('\nRaízes:')
      console.log(`x1 = ${result[0]}`);
      console.log(`x2 = ${result[1]}`);
      break;
    default:
      console.log('\nNão há raízes reais!')
  }
}

main();

// Calculate the roots of a quadratic function
function quadraticFunction(a, b, c) {
  let delta = (b ** 2) - 4 * a * c;

  if (a !== 0 && delta >= 0) {
    if (delta > 0) {
      let x1 = (-b + delta) / (2 * a),
        x2 = (-b - delta) / (2 * a);

      return [x1, x2];
    } else {
      let x = -b / (2 * a);

      return [x];
    }
  } else {
    return [];
  }
}