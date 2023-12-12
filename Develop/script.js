// Assignment Code
var generateBtn = document.querySelector("#generate");


var PasswordCriteria = {
  charactersLength: null,
  uppercaseLetters: false,
  lowercaseLetters: false,
  specialCharacters: false,
}



function askPasswordLength() {
  PasswordCriteria.charactersLength = prompt("Choose a password length between 8-128 characters.");
  if (PasswordCriteria.charactersLength < 8 || PasswordCriteria.charactersLength > 128) {
    alert("Please use length between 8-128 characters.");
    askPasswordLength();
  } else {
    askUpperCaseLetter();
  }
}

function askUpperCaseLetter() {
  var upperCaseCheck = prompt("Would you like to include uppercase letters in your password? Type Y for YES, any other key will be a NO.");
  if (upperCaseCheck === "Y" ||  upperCaseCheck === "y") {
    PasswordCriteria.uppercaseLetters = true; 
  }
  askLowerCaseLetter();
}

function askLowerCaseLetter() {
  var lowerCaseCheck = prompt("Would you like to include lowercase letters in your password? Type Y for YES, any other key will be a NO.");
  if (lowerCaseCheck === "Y" || lowerCaseCheck === "y") {
    PasswordCriteria.lowercaseLetters = true;
  }
  askSpecialCharacters();
} 

function askSpecialCharacters() {
  var specCharCheck = prompt("Would you like to include special characters in your password? Type Y for YES, any other key will be a NO.");
  if (specCharCheck === "Y" || specCharCheck === "y") {
    PasswordCriteria.specialCharacters = true;
  }
}


//function askRandomNumber() {
  


  function generatePassword() {
    askPasswordLength();

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var lettersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'];
  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
