### TypeScript Refresher - 101

# What is TypeScript?

- TypeScript is both a language and a set of tools.
- TypeScript is a typed superset of JavaScript alternative that compiles to plain JavaScript.
- TypeScript is pure object oriented with classes, interfaces and statically typed like C# or Java.
- TypeScript is an strongly typed language which builds on JavaScript giving you better tooling at any scale.
- Allowing us to use ES6 features like classes, arrow functions, and modules, while still providing the safety of types.
- Extra features like enums, interfaces, generics, and more.

# Why TypeScript?

- In production, JavaScript code can become difficult to maintain because of the lack of type declarations, which leads to errors when trying to use the code in other applications. TypeScript solves this problem by allowing developers to use type declarations and compile the code to JavaScript. In addition, TypeScript provides extra features such as enums, interfaces, generics, and more. Typescript does not use dynamic typing, but rather, static typing. This means that variables can be defined to have a type, such as a string or a number, and that type cannot be changed. This allows for better code quality and fewer bugs.

## Little Recap of JavaScript

# What is Arrow Function?

- Arrow functions are a new way to write anonymous function expression in JavaScript. They have a shorter syntax than function expressions and don't bind their own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

syntax:

```javascript
const add = (a, b) => {
  return a + b;
};

// or

const add = (a, b) => a + b;

// or

const add = (a, b) => ({ a: a, b: b });

// or

const add = (a, b) => ({ a, b });
```

# What is Spread Operator?

- The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.

syntax:

```javascript
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
```

# What is Rest Operator?

- The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of rest parameter a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

syntax:

```javascript
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
```

# What is Classes?

- Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

syntax:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

const person1 = new Person("John", 33);
const person2 = new Person("Sara", 28);
```

## Let's start with TypeScript

# Setting up TypeScript

- We need a compiler to compile TypeScript code to JavaScript code because browsers can only understand JavaScript code.

- Command to install TypeScript compiler:

```bash
npm install -g typescript
```

- Create a TypeScript file: `app.ts`
- Also create a `index.html` file and css file for styling.

- Compile TypeScript to JavaScript:
  In the terminal, run:

```bash
tsc app.ts

# Watch mode
tsc app.ts -w

```

```ts
const inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});
```

# What is TypeScript Inferece?

- TypeScript can infer the type of a variable based on its value. For example, if you declare a variable and initialize it with a value of 10, TypeScript will infer that the type of that variable is number. This is called type inference.

# What is explicit type?

- Explicit typing is when you declare a variable and explicitly define its type. For example, if you declare a variable and initialize it with a value of 10, TypeScript will infer that the type of that variable is number. This is called type inference.

# What is Union Type?

- A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

```ts
let value: string | number;
value = 10;
value = "10";
```

# What are the typescript types?

- TypeScript has the following data types for primitives: number, string, boolean, bigint, symbol, null, and undefined. TypeScript also supports the following non-primitive types: any, unknown, never, and void.

# Typescript arrays?

syntax:

```ts
let arr: number[] = [1, 2, 3, 4, 5];
let arr: Array<number> = [1, 2, 3, 4, 5];
```

# Typescript objects?

syntax:

```ts
let object = {
  name: "jadid",
  age: 30,
};

object.age = 40;
object.name = "al";

let obj: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30,
};
```
