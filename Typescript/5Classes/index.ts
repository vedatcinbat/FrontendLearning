class PersonClass {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  }
  
  let personObj = new PersonClass("Alice", 30);
  console.log(personObj.greet()); // Outputs: "Hello, my name is Alice"


  


class Car {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`Driving the ${this.brand} ${this.model}`);
    }
}

let carObj = new Car("Toyota", "Corolla");
carObj.drive(); // Outputs: "Driving the Toyota Corolla"


class StudentClass {
    constructor(public name: string, private age: number) {}

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

let studentObj = new StudentClass("Alice", 30);
console.log(studentObj.getDetails()); // Outputs: "Name: Alice, Age: 30"


// Inheritance and Method Overriding
class Animal {
    move() {
        console.log('The animal is moving')
    }
}

class Dog extends Animal {
    move() {
        console.log('The dog is running')
    }
}

const dog = new Dog();
dog.move(); // Outputs: "The dog is running"


// Readonly Properties
class Book {
    readonly title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const book = new Book('The Great Gatsby');
console.log(book.title); // Outputs: "The Great Gatsby" 
// book.title = 'New Title'; // Error, Cannot assign to 'title' because it is a read-only property


// Static Property and Methods
// Static properties and methods are accessed on the class itself, not on the instances of the class.
class MathUtil {
    static pi: number = 3.14;
  
    static calculateCircumference(diameter: number): number {
      return this.pi * diameter;
    }
}

console.log(MathUtil.pi); // Outputs: 3.14
console.log(MathUtil.calculateCircumference(10)); // Outputs: 31.4


// Abstract Classes and Methods
// Abstract classes are base classes that other classes can inherit from.
// They may not be instantiated directly. Abstract classes can contain abstract methods.
// Abstact methods are methods that must be implemented in derived classes.

abstract class Shape {
    abstract area(): number;

    printArea() {
        console.log('Area:', this.area());
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(5);
circle.printArea(); // Outputs: Area: 78.53981633974483