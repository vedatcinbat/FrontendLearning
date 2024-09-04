// Conditional Types

type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>; // yes
type B = IsString<number>; // no


// Distributive Conditional Types

type FilterString<T> = T extends string ? T : never;

type Result = FilterString<string | number>; // string


// Mapped Types
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

interface UserTypeTest {
    name: string;
    age: number;
}

type ReadOnlyUser = ReadOnly<UserTypeTest>;

//let user: ReadOnlyUser = { name: 'Alice', age: 25 };


// user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
// user.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.


// Utility Types
// Utility types are built-in types in TypeScript that make it easier to manipulate and transform 
// existing types
// Partial | Pick | Omit | Record | Exclude etc

// Partial: Makes all properties of a type optional
interface User {
    name: string;
    age: number;
}

type PartialUser = Partial<User>;

//let user: PartialUser = { name: 'Alice' }; // OK because age is optional


// Pick: Creates a new type by picking a subset of properties from an existing type
type PickUser = Pick<User, 'name'>
const pickUser: PickUser = { name: 'Alice' };
// PickUser type will have only name property from User type


// Omit: Creates a new type by omitting a specific properties from an existing type
type OmitUser = Omit<User, 'age'>
//const omitUser: OmitUser = { age: 25 }; // OK because name is optional
// OmitUser type will have only age property from User type


// Record: Constructs an object type where the keys are from one type, and the values are of another type
type Roles = 'admin' | 'user' | 'guest';
type RoleMapping = Record<Roles, string>

let rolePermissions: RoleMapping = {
    admin: 'full',
    user: 'limited',
    guest: 'none'
}


// Exclude: Excludes types from a union
type Numbers = Exclude<string | number | boolean, boolean>;
// Numbers type will be string | number because boolean is excluded



// Discriminated Unions
// Discriminated unions are a powerful pattern for working with union types in TypeScript
// They involve using a common property to differentiate between different variants of the union

interface DogType {
    type: 'dog';
    bark: () => void;
}

interface CatType {
    type: 'cat',
    meov: () => void;
}

type AnimalType = DogType | CatType;


function handleAnimal(animal: AnimalType) {
    if(animal.type === 'dog') {
        animal.bark();
    }else if(animal.type === 'cat') {
        animal.meov();
    }
}

const dog1: AnimalType = {
    type: 'dog',
    bark: () => console.log('bark')
}

const cat1: AnimalType = {
    type: 'cat',
    meov: () => console.log('meov')
}

dog1.bark(); // bark
cat1.meov(); // meov


// Type Guards and Type Narrowing
// Type guards are functions or expressions that allow you to narrow down 
// the type of a variable within a specific block of code
// TS uses control flow analysis to refine types based on conditions

// typeof Type Guards
function printId(id: string | number) {
    if(typeof id === 'string') {
        console.log(id.toUpperCase());
    }else {
        console.log(id);
    }
}


// instanceof Type Guards
class Foo {
    foo = 123;
}

class Bar {
    bar = 123;
}

function doStuff(obj: Foo | Bar) {
    if(obj instanceof Foo) {
        console.log(obj.foo);
    }else {
        console.log(obj.bar);
    }
}

// Custom Type Guards

function isDog(animal: DogType | CatType): animal is DogType {
    return (animal as DogType).bark !== undefined;
}

function speak(animal: DogType | CatType) {
    if(isDog(animal)) {
        animal.bark();
    }else {
        animal.meov();
    }
}

const dog2: AnimalType = {
    type: 'dog',
    bark: () => console.log('bark')
}

const cat2: AnimalType = {
    type: 'cat',
    meov: () => console.log('meov')
}

speak(dog2); // bark
speak(cat2); // meov