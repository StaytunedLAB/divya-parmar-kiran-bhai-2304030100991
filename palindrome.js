/**
 * Checks if a string is a palindrome by reversing it.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindromeReverse(str) {
  // 1. Convert the string to an array of characters
  const charArray = str.split('');
  
  // 2. Reverse the array
  const reversedArray = charArray.reverse();
  
  // 3. Join the array back into a string
  const reversedStr = reversedArray.join('');
  
  // 4. Compare the original string with the reversed string
  return str === reversedStr;
}

// Test Cases (Note: Palindrome checks are typically case-sensitive and space-sensitive)
const wordA = "madam";     // Palindrome
const wordB = "racecar";   // Palindrome
const wordC = "hello";     // Not a Palindrome
const wordD = "Madam";     // Not a Palindrome (due to case-sensitivity)

console.log(`"${wordA}": ${isPalindromeReverse(wordA)}`);
console.log(`"${wordB}": ${isPalindromeReverse(wordB)}`);
console.log(`"${wordC}": ${isPalindromeReverse(wordC)}`);
console.log(`"${wordD}": ${isPalindromeReverse(wordD)}`);