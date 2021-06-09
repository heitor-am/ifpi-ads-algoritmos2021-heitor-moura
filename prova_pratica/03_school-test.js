// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Avaliação Escolar ###\n');
  console.log('OBS: Só digite notas entre 0 e 10!')

  // Read the user's input
  let name = input('Nome do aluno: '),
    grade1 = Number(input('Informe a nota da 1° prova: ')),
    grade2 = Number(input('Informe a nota da 2° prova: ')),
    activities = Number(input('Informe a nota das atividades: '));

  // Process
  let average = calculateAverage(grade1, grade2, activities),
    result;

  if (average >= 7) {
    result = 'Aprovado!';
  } else if (average < 4) {
    result = 'Reprovado!';
  } else {
    // Read the final test grade
    let finalGrade = Number(input('Nota na prova final: '));
    average = (average + finalGrade) / 2;

    result = (average >= 6)
      ? 'Aprovado após Prova Final!'
      : 'Reprovado após Prova Final!';
  }

  // Output
  console.log(`\nSituação do aluno ${name}: ${result}`)
  console.log(`Média final: ${average.toFixed(2)}`);
}

main();

// Calculate the average of the grades
function calculateAverage(g1, g2, atvs) {
  return (g1 * 2 + g2 * 3 + atvs * 1) / 6;
}