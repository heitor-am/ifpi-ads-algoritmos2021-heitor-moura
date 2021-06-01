// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Círculo Trigonométrico ###\n');

  // Read the user's input
  let angle = Number(input('Medida do ângulo (entre 0° e 360°): '));

  // Check the quadrant of an angle 
  if (angle >= 0 && angle <= 90) {
    console.log('\nEstá no 1° quadrante!');
  } else if (angle >= 90 && angle <= 180) {
    console.log('\nEstá no 2° quadrante!');
  } else if (angle >= 180 && angle <= 270) {
    console.log('\nEstá no 3° quadrante!');
  } else if (angle >= 270 && angle <= 360) {
    console.log('\nEstá no 4° quadrante!');
  } else {
    // Alternative output: if the angle isn't between 0 and 360
    console.log('\nÂngulo inválido!')
  }
}

main();