// Assignment Code
var generateBtn = document.querySelector("#generate");


var PasswordCriteria = {
  charactersLength: null,
  uppercaseLetters: false,
  lowercaseLetters: false,
  specialCharacters: false,
  numericCharacters: false,
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
  PasswordCriteria.uppercaseLetters = confirm("Please press OK to include uppercase letters in your password, or press Cancel to exclude them.");
  // var response = confirm("Press OK if you'd like to include Uppercase letters, Cancel otherwise.");
  // if (response) {
  //   PasswordCriteria.uppercaseLetters = true;
  // } else {
  //   PasswordCriteria.uppercaseLetters = false;
  // }
  // var upperCaseCheck = prompt("Would you like to include uppercase letters in your password? Type Y for YES, any other key will be a NO.");
  // if (upperCaseCheck === "Y" ||  upperCaseCheck === "y") {
  //   PasswordCriteria.uppercaseLetters = true; 
  // }
  askLowerCaseLetter();
}

function askLowerCaseLetter() {
  PasswordCriteria.lowercaseLetters = confirm("Please press OK to include lowercase letters in your password, or press Cancel to exclude them.");
  // var lowerCaseCheck = prompt("Would you like to include lowercase letters in your password? Type Y for YES, any other key will be a NO.");
  // if (lowerCaseCheck === "Y" || lowerCaseCheck === "y") {
  //   PasswordCriteria.lowercaseLetters = true;
  // }
  askSpecialCharacters();
} 

function askSpecialCharacters() {
  PasswordCriteria.specialCharacters = confirm("Please press OK to include special characters in your password, or press Cancel to exclude them.");
  // var specCharCheck = prompt("Would you like to include special characters in your password? Type Y for YES, any other key will be a NO.");
  // if (specCharCheck === "Y" || specCharCheck === "y") {
  //   PasswordCriteria.specialCharacters = true;
  // }
  askRandomNumber();
}


function askRandomNumber() {
  PasswordCriteria.numericCharacters = confirm("Please press OK to include numbers in your password, or press Cancel to exclude them.");
  // var numCharCheck = prompt("Would you like to include special characters in your password? Type Y for YES, any other key will be a NO.");
}
  


  function generatePassword() {
    askPasswordLength();

    var lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var lettersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var specCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'];

    var randomIntInRange = Math.floor(Math.random() * 10);
    console.log(randomIntInRange)
  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
