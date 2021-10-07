
// Assignment code here

// Password Generator

var generatePassword = function() {
  let promptLength = window.prompt("Please choose how long you want your password to be. A minimum of 8 characters and a maximum of 128.");
    if (promptLength >= 8 && promptLength <= 128) {
      promptLength = Math.floor(promptLength);
    } else if (promptLength < 8) {
      window.alert("Your password needs to be a minimum of 8 characters!");
      generatePassword();
    } else if (promptLength > 128) {
      window.alert("Your password can only be a maximum of 128 characters!");
      generatePassword();
    } else {
      window.alert("Your response needs be a numeric value. Please try again.");
      generatePassword();
    };
  

  let promptLowercase = window.confirm("Do you want to have lowercase in your password?")
    if (promptLowercase) {
      promptLowercase = true;
    } else {
      promptLowercase = false;
    };
  
  let promptUppercase = window.confirm("Do you want to have uppercases in your password?")
    if (promptUppercase) {
      promptUppercase = true;
    } else {
      promptUppercase = false;
    };
  
    let promptNumbers = window.confirm("Do you want to have numbers in your password?")
    if (promptNumbers) {
      promptNumbers = true;
    } else {
      promptNumbers = false;
    };
  
    let promptSpecialChar = window.confirm("Do you want to have special characters in your password?")
    if (promptSpecialChar) {
      promptSpecialChar = true;
    } else {
      promptSpecialChar = false;
    };
  
  // Make new array for password and object
  const passwordArray = " ";
  const generatedArray = [promptLowercase, promptUppercase, promptNumbers, promptSpecialChar];

  // Count how many conditions were available true/false
  const typesCount = promptLowercase + promptUppercase + promptNumbers + promptSpecialChar;
  // console.log('typesCount: ', typesCount);

  // make each type an object, randomize the first character.
  const typesArr = [{ promptLowercase }, { promptUppercase }, { promptNumbers }, { promptSpecialChar }]
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
generateBtn.addEventListener("click", writePassword);