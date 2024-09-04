/*
* DECORATORS
- Decorators in Typescript are a special kind of declaration that can be attached to a class,
method, property, or parameter
- They provide a way to modify or extend the behavior of these elements
- Decorators are a feature inspired by metadata and are widely used in frameworks like Angular
for adding functionality to classes or methods

- To enable decarators in Typescript, you need to enable the experimentalDecorators

tsconfig.json file
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}


* Introduction to Decorators
- A decorator is a function that takes the target it is applied to as an argument and returns a modified target or enhances its behavior
- Decorators can be applied to classes, methods, properties, or parameters

*/

function logger(target: Function) {
    console.log(`Class ${target.name} is decorated with logger`);
}

@logger
class MyClass { }

// In this example, the logger function is a decorator that takes the target class as an argument



// a) Class Decorators

function addTimestamp<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        timestamp = new Date();
    };
}

@addTimestamp
class UserTs {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

//const user = new UserTs("Alice");
//console.log("Timestamp : " + user.timestamp); // Outputs the current date and time


// b) Method Decorators

function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    }

    return descriptor;
}

class Calculator {
    @logMethod
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(1, 2); // Outputs: Calling add with arguments: [1, 2]


// c) Property Decorators

function uppercase(target: any, propertyKey: string) {
    let value = target[propertyKey];
  
    const getter = () => value;
    const setter = (newValue: string) => {
      value = newValue.toUpperCase();
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  }
  
  class Person {
    @uppercase
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  //const person = new Person("Alice");
  //console.log(person.name); // Outputs: "ALICE"



// d) Parameter Decorators
function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter in ${propertyKey} at index ${parameterIndex} is being logged.`);
  }
  
  class Printer {
    print(@logParameter message: string) {
      console.log(message);
    }
  }
  
  const printer = new Printer();
  printer.print("Hello"); // Logs: "Parameter in print at index 0 is being logged."