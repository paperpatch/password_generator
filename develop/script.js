// Assignment code here

// Password Generator

var generatePassword = function() {

  // Window Prompts

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

  // Count how many conditions there are. Check if user input a condition type.

  const conditionsCount = promptLowercase + promptUppercase + promptNumbers + promptSymbol;

  if (conditionsCount === 0) {
    window.alert("You need to have at least one character type. Please try again.");
    return generatePassword();
  };

  // Filter conditions

  let  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  if (!promptLowercase) {
    charset = charset.replace("abcdefghijklmnopqrstuvwxyz", "");
  };
  if (!promptUppercase) {
    charset = charset.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
  };
  if (!promptNumbers) {
    charset = charset.replace("0123456789", "");
  };
  if (!promptSymbol) {
    charset = charset.replace(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", "");
  };

  // Iterates for new password array

  let  newPassword = "";

  for (let i=0; i < promptLength; i++)  {
    newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  };
  return newPassword;
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