interface PersonTest {
    name: string;
    age: number;
    getName: () => void;
}

const person: PersonTest = {
    name: 'John',
    age: 30,
    getName() {
        console.log(this.name);
    }
}

console.log(person);

// Output
// { name: 'John', age: 30, getName: [Function: getName] }

person.getName(); // John