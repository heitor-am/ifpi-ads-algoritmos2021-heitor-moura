const input = require('prompt-sync')();

function main() {
  const text = input('Digite um texto: ');

  let newText;

  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        newText = firstProcessing(text);
        break;
      case 1:
        newText = reverseText(newText);
        break;
      case 2:
        newText = lastProcessing(newText);
        break;
    }
  }

  console.log(`\nResultado: ${newText}`)
}

main();

// Check if the character is a letter
function isLetter(char) {
  let code = char.charCodeAt(0);

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return true;
  } else {
    return false;
  }
}

// Each uppercase or lowercase letter must be shifted three positions to the right
function firstProcessing(txt) {
  let result = '',
    code;

  for (let j = 0; j < txt.length; j++) {
    code = txt[j].charCodeAt(0);

    if (isLetter(txt[j])) {
      result += String.fromCharCode(code + 3);
    } else {
      result += txt[j]
    }
  }

  return result;
}

// Each line must be reversed
function reverseText(txt) {
  let result = '';

  for (let x = txt.length - 1; x >= 0; x--) {
    result += txt[x];
  }

  return result;
}

// All characters from the half on must be moved one position to the left
function lastProcessing(txt) {
  const half = txt.length / 2,
    firstHalf = txt.substring(0, half),
    lastHalf = txt.substring(half, txt.length);

  let result = firstHalf,
    code;

  for (let k = 0; k < lastHalf.length; k++) {
    code = lastHalf[k].charCodeAt(0);

    result += String.fromCharCode(code - 1);
  }

  return result;
}