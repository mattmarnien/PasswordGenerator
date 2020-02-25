// Assignment Code
var generateBtn = document.querySelector("#generate");
var passText = document.querySelector("#password");
var lowerCheck = document.querySelector("#lowerCheck");
var upperCheck = document.querySelector("#upperCheck");
var numCheck = document.querySelector("#numCheck");
var specialCheck = document.querySelector("#specialCheck");
var lengthForm = document.querySelector('#lengthForm');
var alertText = document.querySelector("#alertText");
var inputForm = document.querySelector(".inputForm");
var test = false;
var password = "";

// Arrays from which the password will be pulled
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialArr = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '=', '_', ',', '.', ':', ';', '@', '[', ']', '/', '^', '`', '|', '{', '}'];
var passwordArr = [];

function passTest(use, arr) {
  if (use) {
    var x = password.toString();

    for (let i = 0; i < arr.length; i++) {
      if (x.indexOf(arr[i]) !== -1) {
        break;
      }
      else if (x.indexOf(arr[i]) === -1 && i == (arr.length - 1)) {
        console.log(password);
        console.log("rewriting")
        writePassword();
      }
    }
  }
  else {
    return;
  }

}


// Write password to the #password input
function writePassword() {
  // checks requested password length and ensures it is a numerical value
  var passLength = lengthForm.value;
  if (passLength < 8 || passLength > 128 || isNaN(lengthForm.value)) {
    alertText.textContent = "Please enter your desired password length as a number. (Between 8 and 128 characters)";
    lengthForm.value = "";
    return;
  }

  // checks user input for selected items
  useLower = lowerCheck.checked;
  useUpper = upperCheck.checked;
  useNum = numCheck.checked;
  useSpecial = specialCheck.checked;

  // Requires user to select some elements for password
  if (useLower == false && useUpper == false && useNum == false && useSpecial == false) {
    alertText.textContent = "Please select at least one option out of lower case letters, upper case letters, numbers, and special characters.";
    return;
  }

  // Clears alert text if any issues existed previously
  alertText.textContent = "";
  // Establishes array password is made from

  if (useLower) {
    passwordArr = passwordArr.concat(lowerArr);
  }
  if (useUpper) {
    passwordArr = passwordArr.concat(upperArr);
  }
  if (useNum) {
    passwordArr = passwordArr.concat(numArr);
  }
  if (useSpecial) {
    passwordArr = passwordArr.concat(specialArr);
  }

  if (useLower == false && useUpper == false && useNum == false && useSpecial == false) {
    alert("Password must include at least one of lower case letters, upper case letters, numbers, or special characters");
  }

  // generates a random password from selected Array
  password = "";

  for (var i = 0; i < passLength; i++) {
    var x = passwordArr[(Math.floor(Math.random() * passwordArr.length))];
    password += x;
  }

  passTest(useLower, lowerArr);
  passTest(useUpper, upperArr);
  passTest(useNum, numArr);
  passTest(useSpecial, specialArr);

  passText.textContent = password;
  passwordArr = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  writePassword();
})

lengthForm.addEventListener("submit", function (event) {
  event.preventDefault();
  writePassword();
})







