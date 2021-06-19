/**
 * Note:-
 * 1. Download & Install Node.JS
 * 2. npm install tsc (on the required folder)
 * 3. check 'tsc -v' on cmd
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 1. Introduction */
 /** written on all ts file as it convert file to module*/
var message = "Hello World";
console.log(message);
/**
 * to compile, tsc file.ts, converts to javascript
 * to run, node file.js
 */
/** 2. Variable Declaration */
var x = 10;
var y = 20;
/** 3. Variable Types */
var isBoolean = true;
var total = 10;
var name = 'Vishwas';
var withBacktick = "My name is " + name + "\nI am a beginner in typescript";
var n = null = null; /**null type*/
var u = undefined; /**undefined type*/
var array1 = [1, 2, 3]; /**Array*/
var array2; /** another way for declaring array */
var person1 = ['Chris', 22]; /** Tuple */
/**
 * Array contains elements of same types, for different type, we use tuples.
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; /**Enum*/
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = 'viswas'; /**any type won't throw error on giving different type value*/
/** Multitype Variable (Instead of any type, mention any specific types) */
var multiType;
multiType = 20;
multiType = true;
/** Function (with optional parameters) */
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
/** Function (with default parameters) */
function add(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return num1 + num2;
}
/** Passing object as Parameter */
var person = {
    firstname: "Chris",
    lastname: "Lynn"
};
function fullName(person) {
    console.log(person.firstname + " " + person.lastname);
}
fullName(person);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
/** Class */
var Employee = (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
})();
var emp1 = new Employee('Viswas');
console.log(emp1.employeeName);
emp1.greet();
/** Inheritance */
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        _super.call(this, managerName);
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
})(Employee);
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
/** Access Modifier, like
 * private employeeName : string;
 * we could have use public and protected
 */ 
