import { Person } from "../classes/Person";

describe('Person class', () => {
    let person: Person;

    beforeEach(() =>{
        person = new Person('Alice', 25);
    })

    test('should initialize with the correct name and age', () => {
        expect(person.name).toBe('Alice');
        expect(person.age).toBe(25);
    })

    test('should return a greeting', () => {
        expect(person.greet()).toBe('Hello, my name is Alice and I\'m 25 years old.');
    })
})