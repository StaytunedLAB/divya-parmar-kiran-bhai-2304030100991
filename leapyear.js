function isLeapYear(year) 
{ 
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

const yearA = 2024; 
const yearB = 2025; 
const yearC = 1900; 
const yearD = 2000; 

console.log(`Is ${yearA} a leap year? ${isLeapYear(yearA)}`);
console.log(`Is ${yearB} a leap year? ${isLeapYear(yearB)}`);
console.log(`Is ${yearC} a leap year? ${isLeapYear(yearC)}`);

console.log(`Is ${yearD} a leap year? ${isLeapYear(yearD)}`);
