// Assignment Code
var generateBtn = document.querySelector("#generate");
var passText = document.querySelector("#password");
var lowerCheck = document.querySelector("#lowerCheck");
var upperCheck = document.querySelector("#upperCheck");
var numCheck = document.querySelector("#numCheck");
var specialCheck = document.querySelector("#specialCheck");

// Arrays from which the password will be pulled
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numArr = ['1','2','3','4','5','6','7','8','9','0'];
var specialArr = [' ','!','"','#','$','%','&',"'",'(',')','*','+','-','=','_',',','.',':',';','@','[',']','/','^','`','|','{','}'];
var passwordArr = [];

// Write password to the #password input
function writePassword() {
var passLength = prompt("Enter the desired length of your password. (Between 8 and 128 characters)");
while(passLength < 8 || passLength > 128) {
  alert("Password length must be a number between 8 and 128 characters.");
  passLength = prompt("Enter the desired length of your password. (Between 8 and 128 characters)");
}

useLower = lowerCheck.

// var useLower = confirm("Do you want your password to include lower case letters?");

// var useUpper = confirm("Do you want your password to include upper case letters?");
// var useNum = confirm("Do you want your password to include numbers?");
// var useSpecial =confirm("Do you want your password to include special characters?");
// while(useLower == false && useUpper == false && useNum == false && useSpecial == false)


// Establishes array password is made from

if(useLower){
  passwordArr = passwordArr.concat(lowerArr);
  console.log(passwordArr);
}
if(useUpper){
  passwordArr = passwordArr.concat(upperArr);
  console.log(passwordArr);
}
if(useNum){
  passwordArr = passwordArr.concat(numArr);
  console.log(passwordArr);
}
if(useSpecial){
  passwordArr = passwordArr.concat(specialArr);
  console.log(passwordArr);
}

if(useLower == false && useUpper == false && useNum == false && useSpecial == false) {
  alert("Password must include at least one of lower case letters, upper case letters, numbers, or special characters");
}
 console.log(passwordArr);

  // Math.floor(Math.random*passwordArr.length)

  var password = "";

  for(var i=0; i < passLength; i++){
    console.log(password);
    var x = passwordArr[(Math.floor(Math.random()*passwordArr.length))];
    console.log(x);
    password = password + x;
    console.log(password);
  }
  // var password = writePassword(passwordArr, passLength);
  // console.log(password);

  passText.textContent = password;
  passwordArr =[];
}

  




//   var pass = "";
//   for(var i; i <= passwordArr.length; i++){
//     console.log(pass);
//     var x = arr[Math.floor(Math.random*arr.length)];
//     console.log(x);
//     pass = pass + x;
//     console.log(pass);
    
//   }
//   return pass;

// }

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);








