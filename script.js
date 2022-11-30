// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  //check for password length
  let intCharacterCount = 0;
  while(intCharacterCount > 64 || intCharacterCount < 10 || isNaN(intCharacterCount)) {
    let characterCount = prompt('Choose password length between 10 and 64');
    intCharacterCount = parseInt(characterCount);
  }
  //ask for character type use
  let useSpecialCharacters = false
  let useLowerCase = false
  let useUpperCase = false
  let useNumeric = false
  while(!useSpecialCharacters && !useLowerCase && !useUpperCase && !useNumeric) {
    alert('Must select at least one character type.');
    useSpecialCharacters = confirm('Can use special characters?')
    useLowerCase = confirm('Can use lower case characters?')
    useUpperCase = confirm('Can use upper case characters?')
    useNumeric = confirm('Can use numeric characters?')
  }
  //check for selected character types
  let selectedCharacterTypes = [];
  if(useSpecialCharacters) {selectedCharacterTypes.push(specialCharacters)};
  if(useLowerCase) {selectedCharacterTypes.push(lowerCasedCharacters)};
  if(useUpperCase) {selectedCharacterTypes.push(upperCasedCharacters)};
  if(useNumeric) {selectedCharacterTypes.push(numericCharacters)};
  //create password string
  let passwordString = ''
  for(let i = 0; i < intCharacterCount + 1; i++) {
    let randomCharacterType = Math.floor(Math.random() * selectedCharacterTypes.length);
    let randomCharacterPosition =  Math.floor(Math.random() * selectedCharacterTypes[randomCharacterType].length);
    let randomCharacter = selectedCharacterTypes[randomCharacterType][randomCharacterPosition];
    passwordString += randomCharacter
  }
  
  return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
