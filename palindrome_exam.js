function isPalindrome(str) {
  // Remove spaces and convert the string to lowercase for case-insensitive comparison.
  str = str.replace(/\s/g, '').toLowerCase();

  // Compare the original string with its reverse.
  return str === str.split('').reverse().join('');
}

// Call the function and pass an argument.
let inputString = prompt("Enter a string to check if it's a palindrome:");

if (inputString !== null) {
  const result = isPalindrome(inputString);
  if (result) {
    console.log(`"${inputString}" is a palindrome.`);
  } else {
    console.log(`"${inputString}" is not a palindrome.`);
  }
}
