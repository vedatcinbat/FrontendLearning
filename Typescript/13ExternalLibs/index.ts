/*

1. Installing a third-party library
npm install lodash

2. Using the library

import _ from 'lodash';
....



2. Type Definitions
- To ensure TypeScript understands the types of a JavaScript library, you can
install the corresponding type definition files.
- These are typically available in the @types namespace on npm

> npm install --save-dev @types/lodash
- Now ts know reversedArray is an array of numbers



3. Writing Your Own Type Definitions
- If you're using a JavaScript library that doesn't have type definitions, you can
write your own.
- Create a file with the extension .d.ts (e.g., my-library.d.ts)


4. tsconfig.json Configuration
- The "tsconfig.json" file is used to configure the TypeScript for your project
- When working with external libraries, there are few imporant options to consider

- types: Specifies the type definition files to include

{
    "compilerOptions": {
        "types": ["node", "lodash"]
    }
}
- In this configuration, only the type definitions for "node" and "lodash" will be included, even if other type definitions are installed

o paths and baseUrl: These options help TypeScript resolve modules and type definitions. They are useful when working with monorepos or projects where modules are located in non-standard directories.

{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "utils/*": ["src/utils/*"]
    }
  }
}
- In this configuration, TypeScript knows that imports starting with utils/ should be resolved from the src/utils/ directory

* Summary
- Using third-party libraries: Install JavaScript libraries using npm and ensure they have corresponding type definitions for TypeScript.
- Type definitions: Many popular libraries have type definitions available in the @types namespace.
- Writing your own type definitions: You can write your own .d.ts files for libraries without existing type definitions.
- tsconfig.json: Configure TypeScript to include specific type definitions and resolve modules correctly.


*/

import _ from 'lodash';

let array = [1, 2, 3, 4, 5];

let reversedArray = _.reverse(array);

console.log(`Reversed Array ${reversedArray}`); // Outputs: [5, 4, 3, 2, 1]

import { add } from 'mathLib';

let sum = add(10, 20); // TypeScript knows that add takes two numbers and returns a number
console.log(sum); // Outputs: 30