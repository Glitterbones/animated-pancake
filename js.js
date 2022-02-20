var generateBtn = document.querySelector("#generate");


var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","<",">","?","-","_","=","+","[","{","]","}"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


const characters = ["number", "letters", "character"];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword() {
  var numberPrompt = parseInt (window.prompt ("How many character would you like ? Min 8 - Max 128"));
  console.log("password length" + numberPrompt );
  console.log("password length " + numberPrompt);

    }
  
    if (!numberPrompt) {
      alert ("Value required");

    } else if ( numberPrompt <8 || numberPrompt > 128) {
      alert ("Invalid");
    }

    var numbersConfirm = confirm("Would you like numbers ?");
    var specialCharprompt = confirm("Would you like special characters ?");
    var lowerCaseprompt = confirm("Would you like lower case letters ?");
    var upperCaseprompt = confirm("Would you like upper case letters ?");
generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);