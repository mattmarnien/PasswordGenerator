// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays from which the password will be pulled
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numArr = ['1','2','3','4','5','6','7','8','9','0'];
var specialArr = [' ','!','"','#','$','%','&',"'",'(',')','*','+','-','=','_',',','.',':',';','@','[',']','/','^','`','|','{','}'];
var passwordArr = [];

// Write password to the #password input
function writePassword() {
  var pass;
  for(var i; i<= passLength; i++){
    var x = passwordArr[Math.floor(Math.random*passwordArr.length)];
    pass = pass + x;
    
  }
  return pass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






var passLength = prompt("Enter the desired length of your password. (Between 8 and 128 characters)");
var useLower = confirm("Do you want your password to include lower case letters?");
if(useLower){ passwordArr.(lowerArr);}
console.log(passwordArr.length);
// var useUpper = confirm("Do you want your password to include upper case letters?");

// console.log(passwordArr.length);



// var useNum = confirm("Do you want your password to include numbers?");
// var useSpecial =confirm("Do you want your password to include special characters?");

passwordArr = [];

// if(useLower && useUpper && useNum && useSpecial){
//   passwordArr = lowerArr.concat(upperArr, numArr, specialArr);
//   console.log(passwordArr.length);

//   } else if(useLower && useNum && Use Special)

