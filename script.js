// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(prompt("How long do you want your password to be?"));
  //x alert(length)
  // If the user inputs a string ie NaN then this alert will pop up
  if (isNaN(length) === true) {
    alert(`Please enter a number.`);
    return;
  }

  // Given a min of 10 and max of 64 for user input password length
  if (length < 8) {
    alert(`Password length must be at least 8 characters long.`);
    return;
  }
  if (length >= 125) {
    alert(`Password length must be less than 128 characters long.`);
    return;
  }

  // Give user options by confirming if theyd like special, numeric, lower case, upper case characters

  let hasSpecialCharacters = confirm(
    "Would you like special characters in your password? Click OK for yes."
  );

  let hasNumericCharacters = confirm(
    "Would you like numeric characters in your password? Click OK for yes."
  );
  let hasLowerCasedCharacters = confirm(
    "Would you like lower-cased character characters in your password? Click OK for yes."
  );
  let hasUpperCaseCharacters = confirm(
    "Would you like upper-cased characters in your password? Click OK for yes."
  );

  // To make sure the user picks at least one, an additional conditional is included here to return 'false' if the user selects 'cancel' on all the confirm prompts
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasLowerCasedCharacters === false
  ) {
    alert(`You must pick at least one!`);
    return;
  }

  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCaseCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasNumericCharacters: hasNumericCharacters,
  };

  console.log(passwordOptions);
  return passwordOptions;
}

// Getting a random element from the array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Generating password from user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);

  let result = [];

  let possibleCharacter = [];
  let guaranteedCharacter = [];

  if (options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters));
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters));
  }

  for (let index = 0; index < options.length; index++) {
    var generated = getRandom(possibleCharacter);
    console.log(generated);
    result.push(generated);
  }
  console.log(result);

  return result.join("");
}

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


