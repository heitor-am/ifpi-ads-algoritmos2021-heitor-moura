// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Serasa Score ###\n');
  console.log('OBS: Só digite valores entre 0 e 100!');

  // Read the user's input
  let a = Number(input('Informe o valor do critério A: ')),
    b = Number(input('Informe o valor do critério B: ')),
    c = Number(input('Informe o valor do critério C: '));

  // Process
  let oldScore = (a * 2.6 + b * 5.7 + c * 1.7).toFixed(2),
    newScore = (a * 6.2 + b * 1.9 + c * 1.9).toFixed(2),
    oldScoreCategory = findOldCategory(oldScore),
    newScoreCategory = findNewCategory(newScore);
  
  // Output
  console.log(`\nScore 1.0: ${oldScore} - ${oldScoreCategory}`);
  console.log(`Score 2.0: ${newScore} - ${newScoreCategory}`);
}

main();

// Find the category of Score 1.0
function findOldCategory(score) {
  if (score >= 800 && score <= 1000) {
    return 'Muito bom';
  } else if (score >= 600 && score < 800) {
    return 'Bom';
  } else if (score >= 400 && score < 600) {
    return 'Regular';
  } else {
    return 'Baixo';
  }
}

// Find the category of Score 2.0
function findNewCategory(score) {
  if (score >= 701 && score <= 1000) {
    return 'Muito bom';
  } else if (score >= 501 && score <= 700) {
    return 'Bom';
  } else if (score >= 301 && score <= 500) {
    return 'Regular';
  } else {
    return 'Baixo';
  }
}