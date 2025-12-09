
function isPalindromeReverse(str) {
  
  const charArray = str.split('');
  
 
  const reversedArray = charArray.reverse();
  
 
  const reversedStr = reversedArray.join('');
  
 
  return str === reversedStr;
}


const wordA = "madam";     
const wordB = "racecar";   
const wordC = "hello";    
const wordD = "Madam";    

console.log(`"${wordA}": ${isPalindromeReverse(wordA)}`);
console.log(`"${wordB}": ${isPalindromeReverse(wordB)}`);
console.log(`"${wordC}": ${isPalindromeReverse(wordC)}`);

console.log(`"${wordD}": ${isPalindromeReverse(wordD)}`);
