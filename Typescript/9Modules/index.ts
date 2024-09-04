// Modules
// Modules in Typescript are a way to organize and reuse code by dividing 
// it into separate files and modules
// Each module can export functionality that can then be imported into other modules


// ES Modules (ECMAScript Modules)
// ES Modules are the standard for JS modules and are natively supported in modern JS env
// They use the "import" and "export" keywords to define dependencies and expose functionality
// ES Modules are static, meaning they are analyzed and resolved at compile-time

//import { add } from './add';

//console.log(add(1, 2)); // 3


// CommonJS Modules
// CommonJS is a module system used in Node.js
// It uses "require" and "module.exports" to define dependencies and expose functionality
// CommonJS modules are dynamic, meaning they are loaded and executed at runtime

import {add, subtract} from './math';

console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5

// Default Exports
// Default exports are used when a module exports a single main value
// You can miport default exports with any name
import multiply from './math';
console.log(multiply(10, 5)); // 50



// Default Exports vs Named Exports
// Default Exports
// Default exports are ideal when a module has a single, primary value of function
// You can import default exports with any name, which can be convenient but may lead to ambiguity
import log from './logger';
log('Hello World');


// Named Exports
// - Named exports are preferable when a module exports multiple values or when 
// clarity and consistency in naming are important
// You must import named exports using the exact names defined in the module
import {info, error} from './logger';
info('This is an info message');
error('This is an error message');



// Re-exporting
// Re-exporting allows you to gather exports from multiple modules and export them from a single module
// This can help organize code and simplify imports in other parts of tha application
/* import {add, subtract} from './operations';

console.log(add(5, 2)); // Outputs: 7
console.log(subtract(5, 2)); // Outputs: 3 */