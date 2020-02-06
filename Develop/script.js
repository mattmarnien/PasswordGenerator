// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays from which the password will be pulled
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numArr = ['1','2','3','4','5','6','7','8','9','0'];
var specialArr = [' ','!','"','#','$','%','&',"'",'(',')','*','+','-','=','_',',','.',':',';','@','[',']','/','^','`','|','{','}'];
var passwordArr = [];

// Write password to the #password input
// function writePassword() {
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
// generateBtn.addEventListener("click", writePassword);






var passLength = prompt("Enter the desired length of your password. (Between 8 and 128 characters)");
var useLower = confirm("Do you want your password to include lower case letters?");

var useUpper = confirm("Do you want your password to include upper case letters?");
var useNum = confirm("Do you want your password to include numbers?");
var useSpecial =confirm("Do you want your password to include special characters?");

// Establishes array password is made from

if(useLower && useUpper && useNum && useSpecial){
  passwordArr = lowerArr.concat(upperArr, numArr, specialArr);
  console.log(passwordArr.length);
  } else if(useLower && useNum && useSpecial){
    passwordArr = lowerArr.concat(numArr, specialArr);
    console.log(passwordArr.length)
  } else if(useLower && useNum){
    passwordArr = lowerArr.concat(numArr);
    console.log(passwordArr.length)
  } else if(useLower && useSpecial){
    passwordArr = lowerArr.concat(specialArr);
    console.log(passwordArr.length)
  } else if(useLower){
    passwordArr = lowerArr;
    console.log(passwordArr.length)
  } else if(useUpper && useNum && useSpecial){
    passwordArr = upperArr.concat(numArr, specialArr);
    console.log(passwordArr.length)
  } else if(useUpper && useNum){
    passwordArr = numArr.concat(numArr);
    console.log(passwordArr.length)
  } else if(useUpper && useSpecial){
    passwordArr = upperArr.concat(specialArr);
    console.log(passwordArr.length)
  }  else if(useUpper){
    passwordArr = upperArr;
    console.log(passwordArr.length)
  }  else if(useNum && useSpecial){
    passwordArr = numArr.concat(specialArr);
    console.log(passwordArr.length)
  } else if(useNum){
    passwordArr = numArr;
    console.log(passwordArr.length)
  } else if(useSpecial){
    passwordArr = specialArr;
    console.log(passwordArr.length)
  } else {alert("Password must include at least one of lower case letters, upper case letters, numbers, or special characters");}

  console.log(passwordArr);

  Math.floor(Math.random*passwordArr.length)

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

  alert(password);


