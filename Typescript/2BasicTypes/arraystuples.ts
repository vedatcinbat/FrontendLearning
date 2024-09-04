// arrays
let numbers: number[] = [1, 2, 3, 4, 5];

let names: string[] = ['John', 'Doe', 'Smith'];

// tuples: fixed number of elements with fixed types
let personTest: [string, number];
personTest = ['John', 25]; // correct
// person = [25, 'John']; // error

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(names); // [ 'John', 'Doe', 'Smith' ]
console.log(personTest); // [ 'John', 25 ]