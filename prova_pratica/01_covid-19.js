// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Casos de COVID-19 ###\n');

  // Read the user's input
  let averageToday = Number(input('Informe a média de casos de COVID-19 hoje: ')),
    average14DaysAgo = Number(input('Informe a média de casos de 14 dias atrás: '));

  // Process
  let variation = calculateVariation(averageToday, average14DaysAgo);
  let situation;

  if (Math.abs(variation) < 15) {
    situation = 'Em estabilidade!';
  } else if (variation >= 15) {
    situation = 'Em alta!';
  } else {
    situation = 'Em queda!';
  }

  // Output
  console.log(`\n${situation} Variação de ${variation}%`);
}

main();

// Calculate the variation between the averages
function calculateVariation(today, before) {
  return ((today - before) / before * 100).toFixed(2);
}