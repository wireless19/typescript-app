// Basic Types
let id: number = 5; //typescript
let company: string = "VAAL DIGITAL";
let isPublished: boolean = true;
let x: any = "hello";
// x = true; it's not going to get any errors because we set the variable to accept anything
let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

// Turple
let person: [number, string, boolean] = [1, "victor", true];
//Turple array
let employee: [number, string][];
employee = [
  [1, "Victor"],
  [2, "Israel"],
  [3, "daddy"],
];

//Union
let pid: string | number;
pid = 22;
// or
// pid = "22";

//Enum - It allows us to define a set of named constant, either numeric or strings
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// console.log(Direction2.Left);

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion - is explicitly telling the compiler that we want to treat an entity as a different types
let cid: any = 1;
// let customerId = <number>cid;
//or
//customerId variable type is a number
let customerId = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

//void - its not returning anything
function log(message: string | number): void {
  console.log(message);
}

//Interfaces - is a custom type or specific structure to an object or function
interface UserDetail {
  //readonly make the id object property unchangeable
  readonly id: number;
  name: string;
  //the question mark makes it optional in the object to add the age or not
  age?: number;
}

const user1: UserDetail = {
  id: 1,
  name: "John",
};

//when readonly is applied id can't be changed to 5 it will throw an error to the code below
// user1.id = 5

//difference between type and union
//a type can be used with primitives and unions

//you can't use an interface here because it's not going to work
type Point = number | string;
const p1: Point = 1;

// Interfaces with functions
interface MathFunc {
  (x: number, y: number): number;
}

// const add: MathFunc = function (x: number, y: number): number {
//   return x + y;
// };
//or with arrow function
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
// console.log(add(2, 6));

//classes - classes are used to create objects in javascript
//implement interface with a class
interface PersonDetail {
  id: number;
  name: string;
  registerz(): string;
}

//class Person { when not using interface
class Person implements PersonDetail {
  //   private id: number;
  //   protected id: number;
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  registerz() {
    return `${this.name} is now registered`;
  }
}

const victor = new Person(1, "victor");
const mike = new Person(2, "israel");

// console.log(victor.mike);

// i will get an error in the code below because "private" is only accessible inside the class
// i will get an error in the code below because "protected" is only accessible inside the class and its subclass
// console.log(victor.id = 5);

//subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(9, "Victor", "Frontend dev");
// console.log(emp.registerz());

//Generics - are basically used to build reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);

strArray.push("victor");
// console.log(strArray);
