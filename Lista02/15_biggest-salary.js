// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Salário maior ###\n');

  // Read the user's input
  console.log('[1° professor]');
  let hours1 = Number(input('Horas trabalhadas: ')),
    valuePerHour1 = Number(input('Valor por hora: '));

  console.log('\n[2° professor]');
  let hours2 = Number(input('Horas trabalhadas: ')),
    valuePerHour2 = Number(input('Valor por hora: '));

  // Get the result
  let result = biggestSalary(hours1, valuePerHour1, hours2, valuePerHour2);

  // Output
  console.log(`\nMaior salário: ${result}`)
}

main();

// Calculate the biggest salary
function biggestSalary(h1, vh1, h2, vh2) {
  return ((h1 * vh1) > (h2 * vh2)) ? '1° professor' : '2° professor'; 
}