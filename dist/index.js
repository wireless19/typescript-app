"use strict";
// Basic Types
let id = 5; //typescript
let company = "VAAL DIGITAL";
let isPublished = true;
let x = "hello";
// x = true; it's not going to get any errors because we set the variable to accept anything
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// Turple
let person = [1, "victor", true];
//Turple array
let employee;
employee = [
    [1, "Victor"],
    [2, "Israel"],
    [3, "daddy"],
];
//Union
let pid;
pid = 22;
// or
// pid = "22";
//Enum - It allows us to define a set of named constant, either numeric or strings
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion - is explicitly telling the compiler that we want to treat an entity as a different types
let cid = 1;
// let customerId = <number>cid;
//or
//customerId variable type is a number
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//void - its not returning anything
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const p1 = 1;
// const add: MathFunc = function (x: number, y: number): number {
//   return x + y;
// };
//or with arrow function
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//class Person { when not using interface
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(9, "Victor", "Frontend dev");
// console.log(emp.registerz());
//Generics - are basically used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);
strArray.push("victor");
// console.log(strArray);
