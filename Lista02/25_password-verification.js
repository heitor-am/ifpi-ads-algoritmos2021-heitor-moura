// Include the prompt-sync module
const input = require('prompt-sync')();

function main() {
  console.log('### Verificação de senha ###\n');

  // Read the user's input
  let password = input('Informe a senha: ');

  // Get the result
  let result = checkPassword(password);

  if (result) {
    // Output: if the password is correct
    console.log('\nAcesso permitido!');
  } else {
    // Output: if the password isn't correct
    console.log('\nAcesso negado!');
  }
}

main();

// Check the password validity
function checkPassword(pwd) {
  return (pwd === '1234') ? true : false;
}