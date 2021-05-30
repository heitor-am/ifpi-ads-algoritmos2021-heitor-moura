// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Lados do triângulo ###\n');

  // Read the user's input
  let a = Number(input('Informe o 1° lado: ')),
    b = Number(input('Informe o 2° lado: ')),
    c = Number(input('Informe o 3° lado: '));

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
    meetTheCondition = (a + b > c) && (a + c > b) && (b + c > a);

  return (withoutZero && meetTheCondition) ? true : false;
}

// Check the triangle type (by lengths of sides)
function typeOfTriangle(a, b, c) {
  if (isTriangle(a, b, c)) {
    if (a === b && b === c) {
      return 'equilátero';
    } else if (a === b || a === c || b === c) {
      return 'isósceles';
    } else {
      return 'escaleno';
    }
  } else {
    return false;
  }
}