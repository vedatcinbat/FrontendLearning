// Function Types

/* function add(a: number, b: number): number {
  return a + b;
} */


/* let myFunc: (x: number, y: number) => number;
myFunc = (x, y) => x + y;

 */
// Higher-Order Functions
// A higher-order function is a function that either takes one or more functions as 
// arguments, returns a function, or both
// These are common in functional programming and can make your code more modular and reusable

function multiplyBy(factor: number): (x:number) => number {
    return function(x: number): number {
        return x * factor;
    }
}

const double = multiplyBy(2);

console.log(double(15)); // 30
console.log(double(25)); // 50

// Function Overloads
// Function overloads allow you to define multiple signatures for a function
// The compiler will resolve the correct signature based on the number of arguments passed
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', 'World')); // HelloWorld

// Generic Functions
// Generic functions allow you to write functions that can work with and data type
// Providing greater flexibility and reusability

/* function identity<T>(arg: T): T {
    return arg;
} */


function displayArr<T>(arr: T[]): T[] {
    return arr;
}


/* 
let output1 = identity<string>('Hello');
let output2 = identity<number>(10); */

let arr1 = displayArr<number>([1, 2, 3, 4, 5]);
let arr2 = displayArr<string>(['Hello', 'World']);

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // ['Hello', 'World']

/* console.log(output1); // Hello
console.log(output2); // 10 */

// Using Multiple Type Parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}

let mergedObj = merge({name: 'John'}, {age: 30});

console.log(mergedObj); // {name: 'John', age: 30}