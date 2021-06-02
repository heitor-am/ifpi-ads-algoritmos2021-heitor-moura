// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Hipotenusa ###\n');

  // Read the user's input
  let side1 = Number(input('Informe o 1° lado do triângulo: ')),
    side2 = Number(input('Informe o 2° lado do triângulo: ')),
    side3 = Number(input('Informe o 3° lado do triângulo: '));

  // Get the result
  let result = sidesOfTriangle(side1, side2, side3);

  // Output
  console.log(`\nHipotenusa: ${result[0]}`);
  console.log(`Catetos: ${result[1]} e ${result[2]}`)
}

main();

// Return the hypotenuse and other sides of a triangle [hypotenuse, side, side]
function sidesOfTriangle(s1, s2, s2) {
  if (l1 > l2 && l1 > l3) {
    return [s1, s2, s3];
  } else if (l2 > l1 && l2 > l3) {
    return [s2, s1, s3];
  } else {
    return [s3, s1, s2];
  }
}