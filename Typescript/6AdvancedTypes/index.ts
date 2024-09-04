let value: string | number;
value = "Hello"; // OK
value = 42; // OK
value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.


interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee;

let emp: EmployeePerson = {
    name: "Alice",
    employeeId: 123
};


type Direction = "up" | "down" | "left" | "right";

let move: Direction;
move = "up"; // OK
//move = "north"; // Error: Type '"north"' is not assignable to type 'Direction'.


type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Hello"; // OK
value = 42; // OK


let someValue: any = "This is a string";

let strLength: number = (someValue as string).length;


let value: string | null = null;
let length: number = value!.length; // OK, but may throw at runtime if value is null


interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Alice", "Bob"];
let firstName: string = myArray[0]; // "Alice"


interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"


let myVar = "Hello";
type MyVarType = typeof myVar; // string
