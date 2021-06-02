// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Idade (em anos) ###\n');

  // Read the user's input
  let day = Number(input('Informe o dia atual: ')),
    month = Number(input('Informe o mês atual: ')),
    year = Number(input('Informe o ano atual: ')),
    birthDay = Number(input('Dia de nascimento: ')),
    birthMonth = Number(input('Mês de nascimento: ')),
    birthYear = Number(input('Ano de nascimento: '));

  let years = calculateAge(day, month, year, birthDay, birthMonth, birthYear),
  months = Math.abs(month - birthMonth),
  days = (day > birthDay) ? day : (day + 30) - birthDay;

  // Output
  console.log(`\nIdade: ${years} anos, ${months} mês(es) e ${days} dia(s)`);
}

main();

// Calculate the age
function calculateAge(d, m, y, bd, bm, by) {
  let age = y - by;

  return ((m < bm) || (m === bm && d < bd)) ? --age : age;
}