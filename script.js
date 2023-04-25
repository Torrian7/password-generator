// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercasearr=["A","B","C"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// DOM elements
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');
// const lengthEl = document.getElementById('lengthEl'); // Add length input element

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// generateEl.addEventListener('click', () => {
//   const length = lengthEl.value;
//   const hasLower = lowercaseEl.checked;
//   const hasUpper = uppercaseEl.checked;
//   const hasNumber = numbersEl.checked;
//   const hasSymbol = symbolsEl.checked;

//   passwordText.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// });

// Generate password function
function generatePassword() {
  var passwordLength=prompt("how long do you want your password to be")
  var confirmuppercase=confirm("would you like uppercase characters")
  // let generatedPassword = '';
  // const typesCount = lower + upper + number + symbol;
  // const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  // if (typesCount === 0) {
  //   return '';
  // }

  // for (let i = 0; i < length; i += typesCount) {
  //   typesArr.forEach(type => {
  //     const funcName = Object.keys(type)[0];
  //     generatedPassword += randomFunc[funcName]();
  //   });
  // }

  // return generatedPassword;
}

// Generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.;';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());
