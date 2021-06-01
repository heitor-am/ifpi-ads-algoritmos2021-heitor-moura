// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Avaliação escolar ###\n');

  // Read the user's input
  let g1 = Number(input('Primeira nota: ')),
    g2 = Number(input('Segunda nota: '));

  let average = (g1 + g2) / 2;

  if (average >= 7) {
    // Output: if passed in exam
    console.log('\nAprovado!');
  } else {
    // Get the result
    let result = passed(average);

    if (result) {
      // Output: if passed in final exam
      console.log('\nAprovado na prova final!')
    } else {
      // Output: if failed the final exam
      console.log('\nReprovado!')
    }
  }
}

main();

// Check the result of final exam
function passed(avg) {
  let g3 = Number(input('Nota da prova final: '));

  return ((g3 + avg) / 2) ? true : false;
}