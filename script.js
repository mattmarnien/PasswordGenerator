// Assignment Code
const generateBtn = document.querySelector("#generate");
const passText = document.querySelector("#password");
const lowerCheck = document.querySelector("#lowerCheck");
const upperCheck = document.querySelector("#upperCheck");
const numCheck = document.querySelector("#numCheck");
const specialCheck = document.querySelector("#specialCheck");
const lengthForm = document.querySelector('#lengthForm');
const alertText = document.querySelector("#alertText");
const inputForm = document.querySelector(".inputForm");
var password = "";

// Arrays from which the password will be pulled
const lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '=', '_', ',', '.', ':', ';', '@', '[', ']', '/', '^', '`', '|', '{', '}'];
const specialUseArr =[];
let passwordArr = [];

function passTest(use, arr) {
  if (use) {
    let x = password.toString();

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

// function to remove specified characters from an array
function arrIncludes(arr, x) {
  if(arr.indexOf(x) !== -1){
    arr.splice(arr.indexOf(x), 1);
    arrIncludes(arr,x);        
  }
  else{
    return;
  }
}

for(let i = 0; i <specialArr.length; i++){
  let newCheck = $(`<input id='${specialArr[i]}Check' type='checkbox' name='${specialArr[i]}' class= 'specialChecks col-3' data-id='${specialArr[i]}'>`)
  let newLabel = $(`<label for='${specialArr[i]}' class='col-3'>`)
  let newBr = $("<br>");
      newLabel.text(specialArr[i]);
      $("#specialDisplayDiv").append(newCheck, newLabel, newBr); 
}

// const specialChecks = document.querySelector("#specialCehcks")

$(".specialChecks").on( 'change', function(event) {
  event.preventDefault();
  let thisSpecial = $(this).data('id');
  console.log(thisSpecial);
  if(this.checked) {
      specialUseArr.push(thisSpecial)
      console.log(specialUseArr);
  } else {
     arrIncludes(specialUseArr, thisSpecial);
     console.log(specialUseArr);
  }
});




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
  useSpecial = specialUseArr.length;

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
   passwordArr = passwordArr.concat(specialUseArr);
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
  passTest(useSpecial, specialUseArr);

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
 
  writePassword();
})

$('#inputForm').on('show.bs.modal', function (event) {
  event.preventDefault();

})






