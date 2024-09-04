// Introduction To Generics
// Generics are used to create reusable components.
// They allow you to write functions, classes, and interfaces that can work with any data type.

function identity<T>(value: T): T {
    return value;
}

let res1 = identity<string>('Hello');
let res2 = identity<number>(10);



// Generic Functions
// Generic function allow you to define a function that works with a variety of types
// The type parameter is specified within angle brackets <T> before the function parameters

function combine<T>(a: T, b: T): T[] {
    return [a, b];
}

let combinedStrings = combine<string>('Hello', 'World');
let combinedNumbers = combine<number>(10, 20);

console.log("CombinedStrings : " + combinedStrings); // ['Hello', 'World']
console.log("CombinedNumbers : " + combinedNumbers); // [10, 20]


// Generic Interfaces
interface Pair<T, U> {
    first: T;
    second: U;
}

let stringNumberPair: Pair<string, number> = {
    first: 'Hello',
    second: 10
}

let numberBooleanPair: Pair<number, boolean> = {
    first: 10,
    second: true
}

console.log(stringNumberPair); // {first: 'Hello', second: 10}
console.log(numberBooleanPair); // {first: 10, second: true}


// Generic Classes
class Box<T> {
    private contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

let stringBox = new Box<string>('Hello');
let numberBox = new Box<number>(10);

console.log(stringBox.getContents()); // Hello
console.log(numberBox.getContents()); // 10

// Generic Classes with Array Type

class BoxArray<T> {
    private contents: T;

    constructor(contents: T) {
        this.contents = contents;
    }

    getContents(): T {
        return this.contents;
    }

    addItem(item: T): void {
        if (Array.isArray(this.contents)) {
            this.contents.push(item);
        }
    }
}

type OrderStatus = 'Pending' | 'Approved' | 'Rejected';
type OrderedUser = {
    name: string;
    email: string;
}
type Order = [OrderStatus, OrderedUser]


const stringArrayBox = new BoxArray<string[]>(['Hello', 'World']);
const numberArrayBox = new BoxArray<number[]>([1, 2, 3, 4, 5]);
const orderArrayBox = new BoxArray<Order[]>([
    ['Pending', { name: 'John', email: 'john@abc.com'}],
    ['Approved', { name: 'Alice', email: 'alice@abc.com'}]
]);

console.log("OrderArrayBox : " + JSON.stringify(orderArrayBox.getContents())); // [['Pending', {name: 'John', email: '



// Generic Constraints
// Generic constraints allow you to specify that a type parameter must extend a particular type
interface HasLenght {
    length: number;
}

function logLength<T extends HasLenght>(item: T): void {
    console.log(item.length);
}

logLength('Hello'); // 5
logLength([1, 2, 3, 4, 5]); // 5
logLength({ length: 10, value: 'something'}); // 10