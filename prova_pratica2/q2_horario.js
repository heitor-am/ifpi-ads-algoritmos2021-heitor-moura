const input = require('prompt-sync')();

function main() {
  const time = input('Informe o horário (hh:mm:ss): ');

  let [hour, minute, second] = time.split(':');

  console.log(`\n${hour} hora(s), ${minute} minuto(s) e ${second} segundo(s)`);
}

main();