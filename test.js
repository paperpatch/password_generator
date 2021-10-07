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


/* // Assignment code here

// Functions to determine whether if user wants to include types to their password

// Password Generator

var generatePassword = function() {
  var determineLength = function() {
    let promptLength = window.prompt("Please choose how long you want your password to be. A minimum of 8 characters and a maximum of 128.");
  
    if (+promptLength >= 8 && +promptLength <= 128) {
      return Math.floor(promptLength);
    } else if (promptLength.length < 8) {
      window.alert("Your password needs to be a minimum of 8 characters!");
      determineLength();
    } else if (promptLength.length > 128) {
      window.alert("Your password can only be a maximum of 128 characters!");
      determineLength();
    } else {
      window.alert("Your response needs be a numeric value. Please try again.");
      determineLength();
    };
  };
  
  var determineLowercase = function() {
    let promptLowercase = window.confirm("Do you want to have lowercase in your password?")
    if (promptLowercase) {
      return true;
    } else {
      return false;
    };
  };
  
  var determineUppercase = function() {
    let promptUppercase = window.confirm("Do you want to have uppercases in your password?")
    if (promptUppercase) {
      return true;
    } else {
      return false;
    };
  };
  
  var determineNumbers = function() {
    let promptNumbers = window.confirm("Do you want to have numbers in your password?")
    if (promptNumbers) {
      return true;
    } else {
      return false;
    };
  };
  
  var determineSpecialChar = function() {
    let promptSpecialChar = window.confirm("Do you want to have special characters in your password?")
    if (promptSpecialChar) {
      return true;
    } else {
      return false;
    };
  };

  // go through functions to see which criteria is fulfilled
  const genLength = determineLength();
  const genLower = determineLowercase();
  const genUpper = determineUppercase();
  const genNumber = determineNumbers();
  const genSymbol = determineSpecialChar();
  
  // Make new array for password and object
  const passwordArray = " ";
  const generatedArray = [genLower, genUpper, genNumber, genSymbol];

  // Count how many conditions were available true/false
  const typesCount = genLower + genUpper + genNumber + genSymbol;
  // console.log('typesCount: ', typesCount);

  // make each type an object, randomize the first character.
  const typesArr = [{ genLower }, { genUpper }, { genNumber }, { genSymbol }]
  const randomTypesArr = Math.floor(Math.random() * typesArr.length);
  typesArr.filter(
    item => Object.values(item)[0]
  );

  // check if user input a condition type.
  if (typesCount === 0) {
    window.prompt("You need to have at least one character type. Please try again");
    return generatePassword();
  };

  // iterates for new password array
  for(var i=0; i < length; i+= typesCount) {
    randomTypesArr.forEach(type => {
      const newFunc = Object.keys(type)[0];

      passwordArray += randomFunc[newFunc]();
    });
  }

  const newPassword = passwordArray.slice(0, length);

  return newPassword;
};

// Generator Functions

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

var getRandomSymbol = function() {
  var specialCodes = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  return specialCodes[Math.floor(Math.random() * symbols.length)]
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */