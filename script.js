// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a", "b",]
// write function to get user criteria
function getCriteria(){
  // use prompt and confirm method to get user criteria
  let passwordLength = prompt("How many characters your password will be?(at least 8 characters and no more than 128 characters)")
  // validate user input to make sure parameters is met.
  if(passwordLength > 128 || passwordLength < 8){
    alert("password should be correct length")
    return
}
  let includeLower = confirm("Do you want to have lower case characters in your password?")
  let includeUpper = confirm("Do you want to have Upper case characters in your password?")
  let includeSpecial = confirm("Do you want to have special character in your password?")
  let includeNumber = confirm("Do you want to have numbers in your password?")
  // create object to store user criteria
  let userCriteria = {
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeNumber: includeNumber,
    includeSpecial:includeSpecial,
    passwordLength: passwordLength
  }
  return userCriteria
}
//write a function to generate password
function generatePassword() {
  //get criteria from user
  var criteria = getCriteria();
  var possibleCharacters =[]
// using if stat. populate possible characters array based on users preferences
  if(criteria.includeLower === true){
    possibleCharacters = possibleCharacters.concat(lower)
    console.log(possibleCharacters)
  }
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
