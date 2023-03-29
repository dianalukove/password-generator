// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase =""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
  var passwordLength = prompt("Enter numbers between 8-128 for password length")
  if(passwordLength <8 || passwordLength >128 || isNaN (passwordLength)){
    alert("Password needs to be between 8-128 letters")
    generatePassword()
  } else{
    var  lowerCaseConfirm = confirm("Do you want to include lowercase")
    var  upperCaseConfirm = confirm("Do you want to include uppercase")
   var  numericConfirm = confirm("Do you want to include numeric")
   var  specialCharacterConfirm = confirm("Do you want to include special character")
  }

  return 123
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
