// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Validação de data ###\n');

  // Read the user's input
  let day = Number(input('Informe o dia: ')),
    month = Number(input('Informe o mês: ')),
    year = Number(input('Informe o ano: '));

  // Get the result
  let result = isValid(day, month, year);

  if (result) {
    // Output: if the date is valid
    console.log('\nÉ uma data válida!')
  } else {
    // Output: if the date isn't valid
    console.log('\nNão é uma data válida!')
  }
}

main();

// Check if the date is valid
function isValid(d, m, y) {
  let dayIsOk = (d >= 1 && d <= 31),
    monthIsOk = (m >= 1 && m <= 12),
    yearIsOk = (y >= 1);

  return (dayIsOk && monthIsOk && yearIsOk) ? true : false;
}