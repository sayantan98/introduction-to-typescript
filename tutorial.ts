/**
 * Note:-
 * 1. Download & Install Node.JS
 * 2. npm install tsc (on the required folder)
 * 3. check 'tsc -v' on cmd
 */

/** 1. Introduction */
export {} /** written on all ts file as it convert file to module*/
let message = "Hello World";
console.log(message);

/**
 * to compile, tsc file.ts, converts to javascript
 * to run, node file.js
 */

/** 2. Variable Declaration */
let x = 10;
const y = 20;

/** 3. Variable Types */

let isBoolean : boolean = true;
let total : number = 10;
let name : string = 'Vishwas';
let withBacktick : string = `My name is ${name}
I am a beginner in typescript`;

let n : null = null; /**null type*/
let u : undefined = undefined; /**undefined type*/

let array1 : number[] = [1,2,3]; /**Array*/
let array2 : Array<number>; /** another way for declaring array */

let person1 : [string,number] = ['Chris', 22]; /** Tuple */

/**
 * Array contains elements of same types, for different type, we use tuples.
 */

enum Color {Red, Green,Blue}; /**Enum*/
let c : Color = Color.Green;
console.log(c);

let randomValue : any = 10;
randomValue = 'viswas'; /**any type won't throw error on giving different type value*/

/** Multitype Variable (Instead of any type, mention any specific types) */
let multiType : number | boolean;
multiType = 20;
multiType = true;

/** Function (with optional parameters) */
function add(num1: number,num2?: number){
    if(num2)
        return num1 + num2;
    else
        return num1;
}

/** Function (with default parameters) */
function add(num1: number,num2: number = 20){
    return num1 + num2;
}

/** Passing object as Parameter */

let person = {              /** An object */
    firstname: "Chris",
    lastname: "Lynn"
}

function fullName(person : {firstname: string, lastname: string}){
    console.log(`${person.firstname} ${person.lastname}`);
}

fullName(person);

/** Interface */
interface Person {      /** A more convenient way than passing object as parameters */
    firstName: String;
    lastName: String;
}
function fullName(person : Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

/** Class */
class Employee {
    employeeName : string;
    constructor(name : string) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let emp1 = new Employee('Viswas');
console.log(emp1.employeeName);
emp1.greet();

/** Inheritance */
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}
let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

/** Access Modifier, like
 * private employeeName : string;
 * we could have use public and protected
 */