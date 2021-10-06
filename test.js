// DOM elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generate event listener
generateEl.addEventListener('click', () => {
  // make length a number instead of a string (+)
  // checkboxes
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol);
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Copy password to clipboard
/* clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
}); */

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. Initialize password variable
  // 2. Filter out conditions or unchecked types
  // 3. Loop over length call generator function for each type
  // 4. Add final password to the password variable and return

  let generatedPassword = " ";

  const typesCount = lower + upper + number + symbol;
  //count checked values
  //console.log('typesCount: ', typesCount);

  // make each type an object
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
    );
  //confirm which checked type is true or false
  //console.log('typesArr: ', typesArr);

  // check if there's any unchecked;
  if (typesCount === 0) {
    return '';
  };

  for(var i=0; i<length; i+= typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      //console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generator functions - https://www.net-comber.com/charset.html

// Random lower alphabet from 'abcdefghijklmnopqrstuvwxyz'
var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Random upper alphabet from 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Random numbers from 0-10
var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Random numbers from OWASP: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var getRandomSymbol = function() {
  var specialCodes = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  return specialCodes[Math.floor(Math.random() * symbols.length)]
}