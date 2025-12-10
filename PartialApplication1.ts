const multiply = (a: number, b: number, c: number): number => a * b * c;

const multiplyByTwo = multiply.bind(null, 2);

console.log(multiplyByTwo(3, 20)); 