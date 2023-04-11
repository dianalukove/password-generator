// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // prompt user to add password criteria
  var minLen = prompt("Password should not be less than 8 characters.")
  if (minLen < 8) {
    alert('A minium length of at least 8 characters')
    minLen = prompt("Specify the minimum lenght for the password, it should not be less than 8 characters.")
  }
  var maxLen = prompt("Specify the maximum lenght for the password, it should be up to 128 characters.")
  if (maxLen > 128) {
    alert('A maximum length up to 128 characters')
    maxLen = prompt("Specify the maximum lenght for the password, it should be up to 128 characters.")

  }
  var specialChars = prompt("Must include a special character.")
  var isNumIncluded = prompt("Must include a number.")
  var isUpperCase = prompt("Must include an uppercase character. ")



  // generate random length between minLen and maxLen
  var passwordLen = Math.round(Math.random() * 10 + (maxLen - minLen))
  // random characters that are included in the password
  const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'


  // generate password
  var password = []
  password.length = passwordLen
  for (var i = 0; i < passwordLen; i++) {
    password[i] = lowerCaseCharacters[i]
  }

  if (isNumIncluded.length && isNumIncluded.toLowerCase() === 'yes') {
    password[maxLen - maxLen] = maxLen - 5
  }
  if (isUpperCase.length && isUpperCase.toLowerCase() === 'yes') {
    password[minLen] = password[minLen].toString().toUpperCase()
  }

  if (specialChars.length) {
    password[maxLen] = specialChars[0]
  }

  // return generated password
  return password.join('')
}