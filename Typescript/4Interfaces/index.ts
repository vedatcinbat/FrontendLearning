// Interfaces are used to define the structure of an object. It is a way to define a contract in your code as well as act as a type-checker.

// Defining an Interface

interface User {
    name: string;
    age: number;
    email: string;
}

let user: User = {
    name: 'Alice',
    age: 30,
    email: 'alice@gmail.com'
}

// In this example, the "User" interface defines the structure of an object. 
// The object "user" must have the properties "name", "age", and "email" with the specified types.


// Optional Properties

interface UserEmailOptional {
    name: string;
    age: number;
    email?: string;
}

let user1: UserEmailOptional = {
    name: 'Alice',
    age: 30
} 

let user2: UserEmailOptional = {
    name: 'Bob',
    age: 25,
    email: 'bob@gmail.com'
}

// In this example, the "UserEmailOptional" interface defines the structure of an object with an optional property "email".


// Readonly Properties: Properties that can only be read but not changed

interface UserReadonlyId {
    readonly id: number;
    name: string;
    age: number;
}

let userReadonly: UserReadonlyId = {
    id: 1,
    name: 'Alice',
    age: 30
}

// user.id = 2; // Error, Cannot assign to 'id' because it is a read-only property

// In this example, the "UserReadonlyId" interface defines the structure of an object with a readonly property "id".
// That means the "id" property can only be read and not changed.


// Extending Interfaces: Interfaces can extend other interfaces
// This allows you to build on existing structures, createing more complex types based on simpler ones

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

let employee: Employee = {
    name: 'Alice',
    age: 30,
    employeeId: 12345
}

// In this example, the "Employee" interface extends the "Person" interface.
// The "Employee" interface has all the properties of the "Person" interface plus an additional property "employeeId".


// Interfaces vs Type Alias
// Both interfaces and type aliases can be used to define custom types in TypeScript.
// However, there are some differences between them:

/* 
o Interfaces
- Praimarly used for defining the shape of objects
- Supports extending other implements for inheritance and implementation
- Can be merged

o Type Aliases
- Can define more than just objects shapes (e.g. union types, tuples, primitives, etc.)
- Cannot be extended or implemented
- Cannot be merged but can be combined using intersection types or union types


*/


interface UserInterface {
    name: string;
    age: number;
}

type UserType = {
    name: string;
    age: number;
}

/*
o When to Use:
-  Use interface when you want to define the shape of an object and might need to extend it or use it in classes.
-  Use type when you need to define more complex types (e.g., unions, intersections) or when working with primitives.
*/

