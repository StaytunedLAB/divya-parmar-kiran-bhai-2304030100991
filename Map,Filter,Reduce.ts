type Person = { firstName: string; lastName: string; age: number };

const people: Person[] = [
  { firstName: "Ada", lastName: "Lovelace", age: 36 },
  { firstName: "Grace", lastName: "Hopper", age: 16 },
  { firstName: "Alan", lastName: "Turing", age: 41 },
  { firstName: "Donald", lastName: "Knuth", age: 17 },
];

const adultNames = people
  .filter((p) => p.age >= 18) 
  .map((p) => `${p.firstName} ${p.lastName}`) 
  .reduce((acc, name) => (acc === "" ? name : `${acc}, ${name}`), ""); 


console.log(adultNames); 