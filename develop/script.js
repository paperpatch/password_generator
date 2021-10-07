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
  
    let promptSymbol = window.confirm("Do you want to have special characters in your password?")
    if (promptSymbol) {
      promptSymbol = true;
    } else {
      promptSymbol = false;
    };
  
  // Make new array for password and object
  const passwordArray = " ";
  const generatedArray = [promptLowercase, promptUppercase, promptNumbers, promptSymbol];

  // Count how many conditions were available true/false
  const typesCount = promptLowercase + promptUppercase + promptNumbers + promptSymbol;
  // console.log('typesCount: ', typesCount);

  // make each type an object, randomize the first type, and filter only true conditions.
  const typesArr = [{ promptLowercase }, { promptUppercase }, { promptNumbers }, { promptSymbol }]
  const shuffledArr = typesArr.sort(() => Math.random() - 0.5);
  console.log(shuffledArr);
  filterTypesArr = shuffledArr.filter(Boolean);
  console.log(filterTypesArr);

  // check if user input a condition type.
  if (typesCount === 0) {
    window.alert("You need to have at least one character type. Please try again");
    return generatePassword();
  };

  let  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let  newPassword = "";

  // iterates for new password array
  for (let i=0; i < promptLength; i++)  {
    newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return newPassword;
};

// Generator Functions

/* var randomFunc = {
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
}; */


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