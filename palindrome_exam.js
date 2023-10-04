const readline = require('readline');

// Create a readline interface for reading user input.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}

// Prompt the user to enter a string.
rl.question("Enter a string to check if it's a palindrome: ", (inputString) => {
  // Close the readline interface.
  rl.close();

  if (/^[a-zA-Z]+$/.test(inputString)) {
    const result = isPalindrome(inputString);
    const reversedString = inputString.split('').reverse().join('');
    if (result) {
      console.log(`The given string: "${inputString}" is a palindrome, the reversed value is: "${reversedString}".`);
    } else {
      console.log(`The given string: "${inputString}" is not a palindrome.`);
    }
  } else {
    console.log(`The given value: "${inputString}" is not a string! The expected data type of the value is string.`);
  }
});
