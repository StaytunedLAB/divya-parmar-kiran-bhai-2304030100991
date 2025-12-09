/**
 * Checks if a given year is a leap year using the standard rules.
 */
function isLeapYear(year) {
  // A year is a leap year if it is divisible by 400 
  // OR if it is divisible by 4 AND NOT divisible by 100
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Test Cases
const yearA = 2024; // Leap Year
const yearB = 2025; // Common Year
const yearC = 1900; // Common Year (Divisible by 100, not 400)
const yearD = 2000; // Leap Year (Divisible by 400)

console.log(`Is ${yearA} a leap year? ${isLeapYear(yearA)}`);
console.log(`Is ${yearB} a leap year? ${isLeapYear(yearB)}`);
console.log(`Is ${yearC} a leap year? ${isLeapYear(yearC)}`);
console.log(`Is ${yearD} a leap year? ${isLeapYear(yearD)}`);