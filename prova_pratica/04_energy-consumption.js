// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Consumo de energia ###\n');

  // Read the user's input
  let valueToday = Number(input('Informe a leitura atual do talão de energia: ')),
    valueBefore = Number(input('Informe leitura antiga do talão de energia: '));

  // Process
  let consumption = valueToday - valueBefore,
    flags = Math.trunc(consumption / 100),
    flagsValue = flags * 8,
    tariff = calculateTariff(consumption);

  // Calculate the taxes on the tariff
  let icms = tariff * 0.25,
    pisConfis = tariff * 0.15,
    illuminationTax = 0;

  if (consumption > 80) illuminationTax = tariff * 0.06;

  tariff += icms + pisConfis + illuminationTax + flagsValue;

  // Output
  console.log(`\nConsumo: ${consumption}KWh`);
  console.log(`Valor faturado: R$${tariff.toFixed(2)}`);
  console.log(`Bandeira: R$${flagsValue.toFixed(2)} - ${flags} bandeira(s)`);
  console.log(`ICMS: R$${icms.toFixed(2)}`);
  console.log(`PIS/CONFIS: R$${pisConfis.toFixed(2)}`);
  console.log(`Taxa de iluminação: R$${illuminationTax.toFixed(2)}`);
}

main();

// Calculate the tariff
function calculateTariff(cons) {
  if (cons <= 30) {
    return 0;
  } else if (cons <= 100) {
    return cons * 0.59;
  } else {
    return cons * 0.75;
  }
}