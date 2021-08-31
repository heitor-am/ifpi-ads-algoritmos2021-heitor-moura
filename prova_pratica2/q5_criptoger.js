const input = require('prompt-sync')();

function main() {
  const phrase = input('Digite uma frase (só letra, número e espaço): ');

  let newPhrase;

  newPhrase = firstProcessing(phrase);
  newPhrase = secondProcessing(newPhrase);
  newPhrase = thirdProcessing(newPhrase);
  newPhrase = lastProcessing(newPhrase);

  console.log(`\nResultado: ${newPhrase}`);
}

main();

function isLetter(char) {
  let code = char.charCodeAt(0);

  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (vowel in vowels) {
    return (char === vowel) ? true : false;
  }
}

function firstProcessing(phrase) {
  let half = phrase.length / 2,
    firstHalf = phrase.substring(0, half),
    lastHalf = phrase.substring(half, phrase.length);

  firstHalf = firstHalf.split('').reverse().join('');
  lastHalf = lastHalf.split('').reverse().join('');

  return firstHalf + lastHalf;
}

function secondProcessing(phrase) {
  let result = phrase;

  for (char of phrase) {
    if (isLetter(char)) {
      switch (char) {
        case 'a':
          result = result.replace('a', '1');
          break;
        case 'e':
          result = result.replace('e', '2');
          break;
        case 'i':
          result = result.replace('i', '3');
          break;
        case 'o':
          result = result.replace('o', '4');
          break;
        case 'u':
          result = result.replace('u', '5');
          break;
      }
    }
  }

  return result;
}

function thirdProcessing(phrase) {
  result = phrase;
  let asterisks;

  for (char of phrase) {
    if (Number.isInteger(+char)) {
      if (char === '0') {
        result = result.replace('0', '#')
      } else {
        asterisks = '';
        
        for (let i = 0; i < Number(char); i++) {
          asterisks += '*';
        }

        result = result.replace(char, asterisks);
      }
    }
  }

  return result;
}

function lastProcessing(phrase) {
  let result = '',
    code;

  for (char of phrase) {
    code = char.charCodeAt(0);

    if (isLetter(char) && !isVowel(char)) {
      result += String.fromCharCode(code + 10);
    } else {
      result += char;
    }
  }

  return result;
}