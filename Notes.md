# TYPESCRIPT

## AXIOS

**Axios** is a client HTTP API based on the XMLHttpRequest interface provided by browsers. It is use to make HTTP request (post and get request).

## LEARNING TYPESCRIPT

### SYNTAX + FEATURES

- Understanding Basic Types in TS
- Function Typing + Annotations
- Type Definition Files
- Arrays in TS
- Modules Systems
- Classes + Refresher on OOP

### DESIGN PATTERNS WITH TYPESCRIPT

How do we use interfaces to write reusable code?

- Projects

## SYNTAX & FEATURES

TYPE - Easy way to **refer** to the different properties & functions that a **value** has.

Type can be string, number boolean, date (new Date()) or List Object {id:1, name: "Du", completed: true}

### **2 CATEGORIES OF TYPES**

**PRIMITIVE TYPES**

- number
- boolean
- void
- undefined
- string
- symbol
- null

**OBJECT TYPES**

- functions
- arrays
- classes
- objects

### **WHY DO WE CARE ABOUT TYPES?**

- Types are used by the TS Compiler to analyze our code for errors.
- Types allow other engineers to understand what values are flowing around our codebase.

### **TYPE ANNOTATIONS & TYPE INFERENCE**

- **Type Annotations** is a **code** we add to tell TS what type of value a variable **will** refer to.
  **Developers** tell TS the type.

- **Type Inference** TS tries to figure out what type of value a variable refers to. **TS** guesses the type.

### **VARIABLES**

Examples:

Different Types of Variables (Type Annotation)

A colon and number **(: number)** is a Type Annotation

```js
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothing: undefined = undefined;

// Built in Objects
let now: Date = new Date();

//Array
let colors: string[] = ["Blue", "Red"];
let myNumbers: number[]= [1,2,3];

// Classes (Instance)
class Car{

}
let car: Car = new Car();
// A variable car is referring to an instance of a Car

// Object Literal
// x & y property with number type annotations
let point: {x: number; y: number} = {
    x: 20,
    y: 10
;}
```

### **FUNCTIONS**

Examples:

- What properties to care about with a function?
- What **arguments ( i )** will go into the function?
- What different **types of values** we expect the function to **return**? **(number return void)**

The annotation of the function **(logNumber)**. Only a description and will not be invoked.

```js
   : (i: number) => void
```

- The actual function is after equals (=). It is the one the provides the implementation.

```js
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

### **TYPE INFERENCE**

```js
const color = 'red';
```

### VARIABLE DECLARATION

const color =

### VARIABLE INITIALIZATION

"red";

If DECLARATION and INITIALIZATION are on the **same line**, TS **will figure out** the type of "color" for us.

Examples:

```js
let apples = 5;
let speed = 'fast';
let hasName = true;
```

### WHY WE MIGHT WANT TO USE TYPE INFERENCE OVER ANNOTATION OR VICE VERSA?

**Type Annotations** - developers tell TS the type.

**When to use?**

- When we declare a variable on one line then **initialize it later**.
- When we want a variable to have a type that **can't be inferred**.
- When a **function returns the 'any'** type and we need to clarify the value.

**Type Inference** - TS guesses the type.

**When to use?**

- Always

**Type Annotations - When a function returns ANY**

_Example:_

```js
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates;)
// {x: 10, y: 20}
// Note: coordinates above is type ANY - TS has no idea what type it is.
```

How JSON.parse( ) works?

- "false" => boolen
- "4" => number
- '{"value": 5} => {value: number}
- '{"number": "alex"} => {name: string}

**Fixing above example:**

```js
// Add a type of annotation for an obj
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates;)
```

**Type Annotations - When a variable declared in 1 line but INITIALIZE it later**

Example:

```js
let words: string[] = ['red', 'yellow', 'blue'];
const result: Record<string, boolean> = words.reduce(
  (words: Record<string, boolean>, word: string) => {
    const foundWord = word === 'blue' ? true : false;
    return {
      ...words,
      [word]: foundWord,
    };
  },
  {}
);

console.log(result);
// { red: false, yellow: false, blue: true }
```

**Alternative Answer Using For Loop**
```ts
let words: string[] = ['red', 'yellow', 'blue'];
// let fourndWord = false; OR
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
  if(words[i] === 'green'){
    foundWords = true;
  }
}
```
**Type Annotations - When a variable whose type cannot be inferred correctly**

Example:

```js
let numbers: number[] = [-10, -1, 12];
const numbersAboveZero: Record<number, boolean> = numbers.reduce(
  (accNumbers: Record<number, boolean>, number: number) => {
    const answer = number > 0 ? true : false;
    return {
      ...accNumbers,
      [number]: answer,
    };
  },
  {}
);
console.log(numbersAboveZero);
// { '12': true, '-10': false, '-1': false }
```

### **FUNCTIONS**

### TYPE ANNOTATIONS FOR **FUNCTIONS**

### TYPE INFERENCE FOR **FUNCTIONS**

Syntax is going to be the arguments with the colon and then the expected type. Immediately after the closing parenthesis of the argument, a colon and the type of annotation.

Example:

```js
const subtract = (a: number, b: number) => {
  return a - b;
};

// Arrow Function
const add = (a: number, b: number): number => {
  return a + b;
};
```

Alternate forms of syntax around annotations for functions (Named Function)

```js
function divide(a: number, b: number): number {
  return a / b;
}
// : number after the arguments( ) is a RETURN type annotations
```

Anonymous functions assigned to variables

```js
const multiply = function (a: number, b: number): number {
  return a * b;
};
```

### VOID AND NEVER TYPE

Example:

```js
const logger = (message: string): void => {
  console.log(message);
};
// void can retun NULL or UNDEFINED

const throwError = (message: string): never => {
  throw newError(message);
}
// never will not execute the function completely. Will use only if we never expected to return any

const throwError = (message: string): void => {
  if (!message) {
    throw newError(message);
  }
};
```
## DESTRUCTURING & ANNOTATIONS
Example:
```js
const todaysWeather ={
  date: new Date(),
  weather: sunny
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);
```
## ANNOTATIONS AROUND OBJECTS
```js
const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lang: 15
  },
  // A Method - A function being defined inside of an obj with the function annotation.
  setAge(age: number): void{
    this.age = age;
  }
}

// Destructuring
const {age, name}: {age: number; name: string} = profile;
const {coords: {lat, lang}}: {coords: lat: number; lang: number} = profile;
```
## ARRAYS IN TYPESCRIPT
Arrays where each element is some consistent type of value
```js
const carMakers = ["ford", "toyota", "bmw"];
// Or need to be annotated if initialize empty array
const carMakers1: string[] = [];

const carsByMake = [
    ["f150"],
    ["corolla"],
    ["camaro"],
]
// Or annotated if initialize empty
const carsByMake1: string[][] = []
```
### WHY WE CARE ABOUT ARRAYS
- TS can do type inference when **extracting values from an array.**
```js
const car = carMakers[0];
const myCar = carMakers.pop();
```
- TS can prevent us from adding incompatible values to the array.
```js
carMakers.push(100);
//shows error as it should be type string
```
- We can get help with **"map", "forEach", "reduce"** functions.
```js
carMakers.map((car: string): string =>{
    return car.toUpperCase();
});
```
- Flexible. Arrays can still contain multiple different types.
```js
const importantDates:(string | Date)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
```
### WHEN TO USE TYPED ARRAYS?
Any time we need to represent a collection of records with some arbitrary sort order.

### TUPLES IN TYPESCRIPT
**Tuples** - Array-like structure where each element represents some property of a record

Example:

Object representing a "drink"
color : brown
carbonated: true
sugar: 40
```ts
// An alternative to repeatedly writing below is using type alias
type  Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ["brown", true, 40];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["green", false, 0];

// pepsi, sprite, tea are not plain arrays but a TUPLE that represents a very specific record inside the application
```
### WHY NOT TO CARE MUCH ABOUT TUPLES?
```js
const carSpecs: [number, number] = [400, 3354]

// It is meaningful to work with an object / model a record with keys and values than making it in tuple
const carStats = {
    horsepower: 400,
    weight: 3354
}
```
## INTERFACES
The interplay between **Interfaces** & **Classes** is how we get really strong code reuse in TS

**Interfaces** creates a **new type**, describing the **property names** and **value types** of an object.

**Creating Interfaces** is **Creating a New Type** - A type in a same way that a number, string or a boolean and so on.

**Note:** name of interface starts in Capital Letter.
```ts
interface Vehicle{
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true
}

// Long repetitive annotations - alternative is using interfaces

const printVehicle = (vehicle: Vehicle): void => {
// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
}

printVehicle(oldCivic);
```
### SYNTAX AROUND INTERFACES
```ts
interface Vehicle{
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`
    }
}

const printSummary = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}

printSummary(oldCivic);
```
### CODE REUSE WITH INTERFACES
A **single interface** - summary() function works on different objects i.e., oldCivic & drink1
```ts
interface Reportable{
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`
    }
}

// Code Reuse with Interfaces
const drink1 = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(`Name: ${item.summary()}`);
}

printSummary(oldCivic);
printSummary(drink1);
```
### **GENERAL PLAN WITH INTERFACES**
**Interface Reportable**

**Reportable** is a gatekeeper to "printSummary" - **printSummary function**

**oldCivic and drink1** - must satisfy the "Reportable" interface to work with "printSummary"

### GENERAL STRATEGY FOR REUSABLE CODE IN TS
- Create functions that accept arguments that are typed with interfaces.
- Objects / classes can decide to "implement" a given interface to work with a function

## BUILDING FUNCTIONALITY WITH CLASSES
### CLASSES
It is a **blueprint** to create an object with some fields (values) and methods (functions) to represent a **"thing"**.

**Classes in 2 Kinds**
- Define a set of fields (values) and **methods (functions)** to represent a "thing".
- Define a set of **fields (values)** and methods (functions) to represent a "thing".

**Name of Class** - Capitalize

```ts
class Vehicle {
    drive(): void{
        console.log('chuga chuga');
    }

    honk(): void{
        console.log('beep');
    }
}

// Calling the above class must have to create an instance of the class and will have access to all the methods inside of the class
const vehicle = new Vehicle();
vehicle.drive() // chuga chuga
vehicle.honk() // beep
```
### BASIC INHERITANCE
```ts
class Vehicle {
    drive(): void{
        console.log('chuga chuga');
    }

    honk(): void{
        console.log('beep');
    }
}

// Creating inheritance using Extends keyword
class Car extends Vehicle {
    // not the same as vehicle - overwritten as a child class
    drive(): void {
        console.log("broooom");
    }
}

const car1 = new Car();
car1.drive();
car1.honk();
```
### INSTANCE METHOD MODIFIERS

**Existence of Modifiers**
- **Public** - This method can be called anywhere, anytime.
- **Private** - This method can only be called by *other methods* in *this* class.
- **Protected** - This method can be called by other methods in *this* class, or by other methods in child class.

```ts
class Vehicle {
    constructor(public color: string){ }

    protected honk(): void{
        console.log('beep');
    }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }

    private drive(): void {
        console.log("broooom");
    }

    startDrivingProcess(): void{
        this.drive();
        this.honk();
    }
}

const car1 = new Car(4, "red");
car1.startDrivingProcess();
```
### File Name in Capital Letter (User.ts) - Creating an Export of Class

## { } in IMPORT
Anything that we export something from a file using just the Export keyword by itself, when we import it, we use the curly braces. Note:  It is not applied to any third party modules ex. import faker from 'faker';
```js
import { User } from './User' // from User filename
```
## ARRANGING ARRAY OF NUMBERS
Array of Numbers [10, 5, 18, -3]
Into [-3, 5, 10, 18]

## ARRANGING ARRAY OF STRINGS
Array of String 'PoaJB'
Into 'aBJoP'

## ARRANGING ARRAY OF LINKED LIST
Array of Linked List 10-> -3-> 27-> 5
Into -3-> 5-> 10-> 27

## SRC DIRECTORY
All files with ts example: index.ts
*To RUN / WATCH the code / JS File*
```js
tsc -w // to watch all the files inside of the root dir / src directory
```

## BUILD DIRECTORY
It is for all Compiled File like index.js etc.
*To BUILD JS File*
```js
tsc
```
## CREATING **TSCONFIG** FILE
*Configuration / Initialization of Typescript Compiler*
```js
tsc --init
```
Everytime we run tsc compiler (tsc index.ts) it will check for the **tsconfig.js** file

To tell the typescript to take all the code from SRC and place the RESULTS in BUILD Directory, from tsconfig.js file check for
```js
// "outDir": "./build"
// "rootDir": "./src"
```
## CONCURRENT COMPILATION & EXECUTION
Note:  Make sure that you are running in the current or same directory
```js
node build/index.js
```
### SETUP AUTOMATICALLY THE COMPILATION / EXECUTION
Generate a **package.json** file to install 2 Commandline Tools to help in **automating** all code running stuff.
```js
npm init -y // to generate package.json file
npm install nodemon concurrently

// nodemon is to rerun Node anytime a file changes inside the project. Responsible for executing the code once it has been compiled.

// concurrently is responsible for helping to run multiple scripts at the same time.
```
No. 1 using **concurrently** is to *run the Script* first to start up the TS Compiler & No. 2 is using **Nodemon** to *execute* the code.

### AUTOMATICALLY BUILD & RUN IN 1 COMMAND BY WRITING SCRIPTS IN **PACKAGE.JSON**
Adding 3 Scripts:
- Setting up the TS into watch mode (Build)
- Setting up the nodemon to run
- Rather have 2 terminal windows open, using this 3rd script will start up the entire project in a Development Mode. (looking for npm with start:)
```json
"scripts": {
    "start:build" : "tsc-w",
    "start:run" : "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```
**To Automatically Execute & Run**
```js
npm start
```
## PARCEL-BUNDLER
It is all about getting some TypeScript executed inside the browser very easily.  It will automate a lot of tooling.
```js
npm install -g parcel-bundler
// a command line tool in plae of ts-node
// Parcel will see the index.ts (any with .ts file) to compile it to JS then replace this script tag.

// TO RUN PARCEL
npx parcel index.html
```

## SET OF RULES (EXTENDS / IMPLEMENTS)
- A **class** can **extend** a **class**
- A **class** can **implement** an **interface**
- An **interface** can **extend** an **interface**

We can define two interfaces and make one extend the other, like so:
```js
interface Boat {
  floating: boolean;
}

interface SailBoat extends Boat {
  sailUp: boolean;
}
```

## TYPE GUARD
### NARROR TYPE OF A VALUE TO A PRIMITIVE TYPE
### USING OF typeof
- number
- string
- boolean
- symbol
```js
if (typeof this.collection === 'string'){

}
```
### NARROW DOWN EVERY OTHER TYPE OF VALUE
### USING OF instanceof
- Every other value that is created with a constructor function like...
  - Date, Sorter
```js
if (this.collection instanceof Array){

}
```

## SORT METHOD
Sorter.ts
- Instructions on how to be eligible for sorting
- Create Interface to sort the different Collections
```js
class Sorter{
  sort(){

  }
}
```
## COLLECTIONS TO BE SORTED
NumberCollection.ts
```js
class NumbersCollection{
  swap(i, j)
  compare(i, j)
  length
}
```
CharactersCollection.js
```js
class CharactersCollection{
  swap(i,j)
  compare(i,j)
}
```
LinkedList.ts
```js
class LinkedList{
  swap(i,j)
  compare(i,j)
  length
}
```
## LINKED LIST IMPLEMENTATION
Link list data structure is a series of different nodes.
- Every node contains one value. A value can be of any arbitrary type, but we will be building the linked list to store numbers.
- So, every node (2 properties) is going to have a **single number**. Also, will have a **reference to the next node inside of a chain** when we get all the way down.
- The very **last** one is going to reference a value of **NULL**, and that means that we've hit the end of our chain.
- Will have **2 classes** - one is to **represent each indiviual node** and the other one is a **linked list class**. The linked list class is going to have a **reference to the Head Node**, and it's also going to have a bunch of methods associated with it to manipulate the overall list.
- Linked List Class
  - add(number) to add a new node. - length() to return the total number of nodes.
  - at(number) - compare(number, number)
  - swap(number, number) - print()

## CLASSIC INHERITANCE
**Inheritance** take all the **methods** from "sorter" ( example: sort( ) ) and **add** them to the target class.

Sorter.ts
```js
collection:  Sortable
sort()
```
### METHODS FROM SORTER
NumbersCollection.ts
```js
length()
compare()
swap()
```
CharactersCollection.ts
```js
length()
compare()
swap()
```
LinkedList.ts
```js
length()
compare()
swap()
```
## ABSTRACT CLASS/INHERITANCE - USED AS A PARENT CLASS
- Can't be used to create an Object directly; creating instance.
  - Example: const numCollection = new NumCollection([3, 5, , -8, 0]);
- Only used as a Parent Class.
- Can contain real implementation for some methods.
- The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implement some other method.

## INTERFACES VS ABSTRACT CLASSES/INHERITANCE
**INTERFACE**
- Sets up a contract between different classes.
- Use when we have a very different objects that we want to work together
- Promotes loose coupling.

**ABSTRACT CLASSES/INHERITANCE**
- Sets up a contract between different classes.
- Use when we are trying to build up a definition of an object.
- Strongly couples classes together.

## PROJECT - FOOTBALL (STATS)
- Take the data inside the spreadsheet in CSV Format
- Load up the data into a Node.js app (Node Std Lib)
  - The **Code** will be the following:
  - Parse the data into usable data structure
  - Run statistical analysis (finding the ave number of goals scored per game or find which team won the most, or maybe which team lost the most.)
  - Generate report - the output to print out in terminal or maybe an HTML file.

## TYPESCRIPT - TYPE DEFINITION FILES
fs - File System (A module in the Node Standard Library)
- We can freely work with different JS Libraries.
  - Requirement: Install the **type definition file**. The Type Definition Files tell Typescript about all the different objects, properties, functions, and function arguments and return values inside of these JS Libraries.
  - Some JS Library has its default type definition files.
  - This is same TRUE in working with Node.js from Typescript
- Installation of Types looks like **npm install @types/filesystem*

# BAD CODE
### TAKING DATA FROM THE CSV FILE
```js
import fs from 'fs';
//note add 'node' in types: under tsconfig.json

const matches = fs.readFileSync('football.csv', {encoding: 'utf-8'});
console.log(matches);
```
### PARSING THE DATA
```js
split('\n') -> string []
// split with a new line character

map + split on their comma (,) -> string [] []
```
```js
const matches = fs
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] =>{
        return row.split(',')
});
```
### ANALYZING THE DATA
Count the number of times that Man United has won a game.
```js
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}
```
### GENERATE A REPORT (OUTPUT THE DATA)
Print and find out the total inside the terminal
```js
console.log(`Man United won ${manUnitedWins} games`);
```
### ISSUES ON ABOVE CODE
- Magic string comparisons
- Source of Data is hardcoded
- Data array is all strings, even though it might have numbers in it.
- Variable named after a specific team
- Analysis type is fixed
- No ability to output the report in different formats

# BETTER CODE - SOLUTION
Using **Enum** - It is short for Enumeration. It is use to signal other developers / engineers that they are closely related values.

### **EXTRACTING DATA - CSVFILEREADER**
### FIELDS
- filename: string
- data: string [][]

### METHODS
- read( ): void

### DATA TYPES - CONVERTING STRINGS TO DATE ETC.
Parsing into its appropriate value like Date, String, Number, Enum
Example: Date
```js
new Date(2020, 0, 5) // year,month,day - 0 index to January
```
- Extract the Date String into month, day and year.
- Subtract the month by 1.
- Feed those values into date constructor.
```js
import fs from 'fs';

const matches = fs
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] =>{
        return row.split(',')
});

const MatchResult = {
  HomeWin: "H",
  AwayWin: "A",
  Draw: "D",
}

let manUnitedWins = 0;

for(let match of matches){
  if(match[1] === "Man United" && match)
}















