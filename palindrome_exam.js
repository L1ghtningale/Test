function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}

let inputString = prompt("Enter a string to check if it's a palindrome:");

if (inputString !== null) {
  if (typeof inputString !== 'string' && ) {
    console.log("Input is not a string.");
  } else {
    const result = isPalindrome(inputString);
    const reversedString = inputString.split('').reverse().join('');
    if (result) {
      console.log(`The given string: "${inputString}" is a palindrome, the reversed value is: "${reversedString}".`);
    } else {
      console.log(`The given string: "${inputString}" is not a palindrome.`);
    }
  }
}
