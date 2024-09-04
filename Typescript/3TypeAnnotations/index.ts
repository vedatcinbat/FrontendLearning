let username: string = 'Alice'; // Username is of type string
let ageTest: number = 30; // Age is of type number
let isStudentTest: boolean = false; // isStudent is of type boolean

//username = 42; // Error, Type 'number' is not assignable to type 'string'

// Type Annotations
// TS allows you to specify the types of function parameters and return values
const greet = (name: string): string => {
    // return 42: // Error, Type 'number' is not assignable to type 'string'
    return `Hello ${name}`;
}

const sayHello = (name: string = 'UnknownUser'): void => {
    console.log(`Hello ${name}`);
}


let greeting = greet('Alice'); // greeting is of type string

console.log(greeting); // Hello Alice

sayHello('Bob'); // Hello Bob
sayHello(); // Hello UnknownUser


// Optional Parameters with '?'

const greetUserOptional = (name: string, age?: number): string => {
    if(age) {
        return `Hello ${name}, you are ${age} years old`;
    }
    return `Hello ${name}`;
}

greetUserOptional('Alice', 30); // Hello Alice, you are 30 years old
greetUserOptional('Bob'); // Hello Bob

console.log(greetUserOptional('Alice', 30)); // Hello Alice, you are 30 years old
console.log(greetUserOptional('Bob')); // Hello Bob

// Default Parameters
const greetUserDefault = (name: string, age: number = 18): string => {
    return `Hello ${name}, you are ${age} years old`;
}

greetUserDefault('Alice', 30); // Hello Alice, you are 30 years old
greetUserDefault('Bob'); // Hello Bob, you are 18 years old

console.log(greetUserDefault('Alice', 30)); // Hello Alice, you are 30 years old
console.log(greetUserDefault('Bob')); // Hello Bob, you are 18 years old


// Rest Parameters
/* const addNumbers = (...numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
} */

//console.log(addNumbers(1, 2, 3, 4)); // 10

// ...numbers: number[] is a rest parameter that allows you to pass any number of arguments to the function
// The function then sums up all the numbers and returns the total