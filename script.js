// Assignment Code
var generateBtn = document.querySelector("#generate");

// var lower = "abcdefghijklmnopqrstuvwxyz";
// var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var special = "'~!@#$%^&*()_+{}|";
// var numbersTrue = "1234567890";

// write function to get user criteria

  function getCriteria(){
    // use prompt and confirm method to get user criteria

    let passwordLength = prompt("How many characters your password will be?(at least 8 characters and no more than 128 characters)");

    // validate user input to make sure parameters is met.

    if (passwordLength <= 128 && passwordLength >= 8) {
      let includeLower = confirm("Do you want to have lower case characters in your password?");
      let includeUpper = confirm("Do you want to have Upper case characters in your password?");
      let includeSpecial = confirm("Do you want to have special character in your password?");
      let includeNumber = confirm("Do you want to have numbers in your password?");
      let userCriteria = {
        includeLower, includeUpper, includeSpecial, includeNumber, passwordLength
      }
      return userCriteria;
    } else {
      alert("password should be correct length. Please try again");
      return;
    }
  }
//write a function to generate password

function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "'~!@#$%^&*()_+{}|";
  var numbersTrue = "1234567890";
  var criteria = getCriteria();
  var possibleCharacters = "";
  var password = "";

// using if stat. populate possible characters array based on users preferences

  if(criteria.includeLower == true){ 
    possibleCharacters = possibleCharacters + lower;
  }
  
  if(criteria.includeUpper == true){
    possibleCharacters = possibleCharacters + upper;
  }
  if(criteria.includeSpecial == true){
    possibleCharacters = possibleCharacters + special;
  }
  if(criteria.includeNumber == true){
    possibleCharacters = possibleCharacters + numbersTrue;
  }
  if(criteria.includeLower  || criteria.includeUpper  || criteria.includeSpecial  || criteria.includeNumber) {
    // if passwordLength = 10, means we have 10 loops
    for(let i=0; i<criteria.passwordLength; i++){
      // shuffle the "possibleCharacters" and store the first character of "possibleCharacters" in "element"
      let element = possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)].charAt(0);  //possibleCharacters = "ashdashksadhfk" charAt(0) = "a"
      password = password + element;
      }
      } else {
        alert("Please select at least one criteria");
        return;
      }
      return password;
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);