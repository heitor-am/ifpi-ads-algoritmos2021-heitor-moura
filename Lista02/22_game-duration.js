// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Duração do jogo ###\n');

  // Read the user's input
  let startHour = Number(input('Informe a hora que iniciou: ')),
    startMinute = Number(input('Informe o minuto que iniciou: ')),
    endHour = Number(input('Informe a hora que terminou: ')),
    endMinute = Number(input('Informe o minuto que terminou: '));

  // Calculate the hours and minutes played
  let hoursPlayed = (startHour <= endHour) ? endHour - startHour : (endHour + 24) - startHour,
    minutesPlayed = (startMinute <= endMinute) ? endMinute - startMinute : (endMinute + 60) - startMinute;

  // Output
  console.log(`\nTempo de jogo: ${hoursPlayed}h${minutesPlayed}min`)
}

main();