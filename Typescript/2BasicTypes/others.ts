// any - unknown - void - null - undefined

// any: that disables type checking
let something: any = 5;
something = 'Hello';

// unknown: safer than any
let somethingUnknown: unknown = 'Hello';

if(typeof somethingUnknown === 'string') {
    console.log(somethingUnknown.toUpperCase()); // OK
}

// void: Usally used as the return type of functions that do not return a value
function logMessage(message: string): void {
    console.log(message); // Hello
}

// null and undefined: subtypes of all other types
let u: undefined = undefined;
let n: null = null;

// Type Inference
// TypeScript can often infer the type of a variable based on its value
// This means you dont always have to explicitly set the type of a variable
let num = 5;
num = 10; // OK
// num = 'Hello'; // Error, Type 'string' is not assignable to type 'number'