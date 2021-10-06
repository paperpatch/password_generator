
// Assignment code here

// Functions to determine whether if user wants to include types to their password

var determineLength = function() {
  var promptLength = window.prompt("Please choose how long you want your password to be. A minimum of 8 characters and a maximum of 128.");

  if (+promptLength >= 8 && +promptLength <= 128) {
    hasLower = Math.floor(promptLength);
    determineLowercase();
  } else if (passInfo.length < 8) {
    window.alert("Your password needs to be a minimum of 8 characters!");
    return determineLength();
  } else if (passInfo.length > 128) {
    window.alert("Your password can only be a maximum of 128 characters!");
    return determineLength();
  } else if (isNaN()) {
    window.alert("Your response needs be a numeric value. Please try again.")
    return determineLength();
  };
};

var determineLowercase = function() {
  var promptLowercase = window.confirm("Do you want to have lowercase in your password?")
  if (promptLowercase) {
    hasLower = true;
  } else {
    hasLower = false;
  };
};

var determineUppercase = function() {
  var promptUppercase = window.confirm("Do you want to have uppercases in your password?")
  if (promptUppercase) {
    hasUpper = true;
  } else {
    hasUpper = false;
  };
};

var determineNumbers = function() {
  var promptNumbers = window.confirm("Do you want to have numbers in your password?")
  if (promptNumbers) {
    hasNumber = true;
  } else {
    hasNumber = false;
  };
};

var determineSpecialChar = function() {
  var promptSpecialChar = window.confirm("Do you want to have special characters in your password?")
  if (promptSpecialChar) {
    hasSymbol =  true;
  } else {
    hasSymbol = false;
  };
};

// Password Generator

var generatePassword = function() {
  var result = (determineLength(),
                determineLowercase(),
                determineUppercase(),
                determineNumbers(),
                determineSpecialChar());
  var generatedPassword = " ";

  // Count how many conditions were available true/false
  var typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
  console.log('typesCount: ', typesCount);
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
generateBtn.addEventListener("click", writePassword);