// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Ângulos do triângulo ###\n');

  // Read the user's input
  let a = Number(input('Informe o 1° ângulo: ')),
    b = Number(input('Informe o 2° ângulo: ')),
    c = Number(input('Informe o 3° ângulo: '));

  // Get the result
  let result = typeOfTriangle(a, b, c);

  if (result) {
    // Output: if the user's input forms a triangle
    console.log(`\nForma um triângulo ${result}!`)
  } else {
    // Output: if the user's input not forms a triangle
    console.log('\nNão forma um triângulo!');
  }
}

main();

// Check if the values form a triangle
function isTriangle(a, b, c) {
  let withoutZero = (a !== 0) && (b !== 0) && (c !== 0),
    sumIs180 = (a + b + c) === 180;

  return (sumIs180 && withoutZero) ? true : false;
}

// Check the triangle type (by internal angles)
function typeOfTriangle(a, b, c) {
  if (isTriangle(a, b, c)) {
    if (a === 90 || b === 90 || c === 90) {
      return 'retângulo';
    } else if (a > 90 || b > 90 || c > 90) {
      return 'obtusângulo';
    } else {
      return 'acutângulo';
    }
  } else {
    return false;
  }
}