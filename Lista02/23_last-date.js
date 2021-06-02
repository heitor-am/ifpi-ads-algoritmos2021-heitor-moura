// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Data mais recente ###\n');

  // Read the user's input
  console.log('[1° data]')
  let day1 = Number(input('Informe o dia: ')),
    month1 = Number(input('Informe o mês: ')),
    year1 = Number(input('Informe o ano: '));

  console.log('\n[2° data]')
  let day2 = Number(input('Informe o dia: ')),
    month2 = Number(input('Informe o mês: ')),
    year2 = Number(input('Informe o ano: '));

  // Get the result
  let result = lastDate(day1, month1, year1, day2, month2, year2);

  if (result === 1) {
    console.log(`\nData mais recente: ${day1}/${month1}/${year1}`);
  } else {
    console.log(`\nData mais recente: ${day2}/${month2}/${year2}`);
  }
}

main();

// Check the last date
function lastDate(d1, m1, y1, d2, m2, y2) {
  if (y1 === y2) {
    if (m1 === m2) {
      return (d1 > d2) ? 1 : 2;
    } else if (m1 > m2) {
      return 1;
    } else {
      return 2;
    }
  } else if (y1 > y2) {
    return 1;
  } else {
    return 2;
  }
}