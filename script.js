// words vs keywords
//Key words - which have some meaning in javascript like (if, else,while,for etc)

// Phase 1: Fudamentals --->
//Variables: var let const
//declarations and initialization

var username = "Sandipan";

var a;//declaration
var a = 13; // declare and initialize

// When we create a variable using var --->
// i. It adds to the window
// ii. its function scoped
// iii. we can declare it again with the same name and we will not get any error.

//----------- From now onwards we will use only 'let' ---------

let b01 = 22;
//const denotes constant .. throughout the program if we know the value won't change in that case we use const. 
const discount = 0.20;

 
//Scope (global, block, functional)

var a = 123; // global scoped

//let is block scoped
{
    let b1 =33;
}

//var is function scoped
function abcd(){
    if(true){
        var val = 23;
    }
}


// Reassignment , redeclaration

var a = 12;
a =32;

var a = 233; // This wii not rais an error that why this is an issue

// To avoide the above mentioned issue we use'let'

let b11 = 12;
b11 = 13;


//let b = 23; ---> this will rais an error

//Temporal Dead Zone () ---->
//In this scenario js knows that the value exist but it cant return the value.
// console.log()
// let a = 22;

// Hoisting imapct per type
//hoisting -> when we decleare a variable in js then it sliced into two parts . The declear part comes first then comes the initialize part.

console.log(a);
var a = 33;
//two parts-->
//steps --> 
// var a = undefined; ---> where evere we declare initialize this line goes to the top of the program.
// console.log(a);
// a=33 

//In the case of var ---->
// var x =2;// Global
// {
//     var x =3;// Global ( it doesnot respect block so it will reinitialize the value of x)
// }
// console.log(x);

//In the case of let ---->
//It respects the block
// let a00 =20;
// {
//     let a00= 30;
//     console.log("Inside :", a00);
// }
// console.log("Outside :" , a00);

  
// if(true){
//     var a01= 1;
//     let b001 = 2;
// }
// console.log(a01);// Output: 1
// console.log(b001);//it doesn't allow the let access outside the block


//------------------DATA TYPES + TYPE SYSTEM-------------------------
//Data types ----->

//i. Primitives -> If we copy these values then we will get the real copy.
//string, number, boolean, null, undefined, symbol, bigint

let obj ={
    uid:1,
    name:"Sandipan",
    age: 20,
    email:"test@test.com"
};

let u1 = Symbol("uid");
obj[u1] = "001";

//ii.Reference -> If we copy these values then we will not get real value but we will get reference of the parent.
//arrays, objects, functions

//-----------Dynamic typing---------------
//here we can change the value of myVal throughout the program and dont have any issue.This is called Dynamic Typing
// let myVal = 22;
// myVal = true;
// myVal = [];
// myVal = null;
// myVal = undefined;


//-----------Type Quirks (e.g. typeof null === 'object')-----------------

// Type coercion ( == vs === ) --> A concept where one type automatically converts

// ----------Truthy vs falsy values----------
// 0 flase "" null undefined Nan document.all ---> these values denotes false
// rest all --> true


// Why NaN is treated as a number ?
// --> In JS NaN treated as a faild number operation 


//------------Operators----------------
// Arithmetic, Comparison, logical, Assignment, Unary, Ternary

// Category            Purpose                             Common Examples
// Arithmetic    Performs mathematical operations.      +, -, *, /, %, **, ++, --
// Assignment    Assigns values to variables.           =, +=, -=, *=, /=, %=
// Comparison    Compares values and returns booleans.  ==, ===, !=, !==, >, <, >=, <=
// Logical       Combines or reverses boolean logic.    && (AND), || , !, `
// Bitwise       Operates on binary representations.    &, |, ^, ~, <<, >>
// String        Concatenates or builds strings.        +, +=
// Special/Misc  Unique language utilities.             ?: (Ternary), ??, typeof, instanceof, ,

//12 > 13 ? console.log("True") : console.log("False")

let x = 10;
let y = 23;

if( x > 10 && y < 25){
    console.log("A")
}else{
    console.log("B")
}

let score = 25;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score>= 60 ? "C" : "Fail";
console.log(grade);



let likes = 100;

function likePost() {
    return ++likes ;
}

console.log(likePost());
console.log(likes);


// if else else-if
// switch case
// early return pattern

function getVal(val){
    if (val < 25) return "D";
    else if (val < 50) return "C";
    else if (val < 75) return "B";
    else return "A"
}

console.log(getVal(57));

//Student grade categorizer

function getGrade(score){
    if (score<=100 && score >= 90 ) return "A+";
    if (score<90 && score >= 80 ) return "A";
    if (score<80 && score >= 70 ) return "B";
    if (score<70 && score >= 60 ) return "C";
    if (score<60 && score >= 33 ) return "D";
    if (score<=32 && score >= 0) return "Fali";
    return "Invalid Marks";
}

console.log(getGrade(90));

// Rock-paper-scissors logic
function rps(user,computer){
    if(user === computer) return 'draw';

    if(user === 'rock' && computer === 'scissor') return "user";
    if(user === 'scissor' && computer === 'paper') return "user";
    if(user === 'paper' && computer === 'rock') return "user";

    return "computer" ;
}

console.log(rps('rock','paper'))


//------ Loops --------
// for loop
console.log("for loop")
for(let i = 1; i< 101 ; i++ ){
    console.log(i);
}


//while loop
console.log("while loop")
let i = 1;
while(i < 101){
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}

//break and continue

//Q1. Print numbers from 1 to 10 using a for loop
for( let i = 1 ; i< 11; i++){
    console.log(i);
} 

//Q2. Print numbers from 10 to 1 using a for loop
for(let i = 10; i>0 ; i--){
    console.log(i)
}

//Q3. Print numbers from 10 to 1 using a while loop
let start = 10
while(start<1){
    console.log(start);
    start--;
}


//Q4. Print odd numbers from 1 to 15 using a while loop
let j = 1;
while(j < 16){
    if(j % 2 === 1){
        console.log(j);
    }
    j++;
}

// Q5. Print the multiplication table of 5

for(i = 1; i<11; i++){
    console.log(`5 * ${i} = ${5 * i}  `);
}
 
// Find the sum of numbers from 1 to 100 using a loop
let sum = 0;
for(let i = 1 ; i < 101 ; i++){
    sum = sum + i ;
}
console.log(sum);

// Print all the numbers between 1 to 50 that are divisible by 3 and 5
for(let i =1; i < 51 ; i++ ){
    if(i %3 === 0 && i % 5 === 0){
        console.log(i)
    }
}

// Ask the user for a number
let val = prompt("Enter a number:")

for(let i = 1; i <= val; i++){
    if(i % 2 ===0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}


// Stop at first multiple of 7
let val1 = prompt("Enter a value:")
for(let i = 1 ; i<= val1;i++){
    console.log(i);
    if(i % 7 === 0){

        break;
    } 
}

//print all the numbers from 1 to 50 only skip when the number is divisible by 3
for(let i = 1; i < 51 ; i++){
    if(i % 3 === 0) continue;
    console.log(i)
}


// FUNCTIONS

function abc(){
    //function declartion
}

let fun = function abc1(){
    //function expression
} ;

//fat arrow function
let fnc = ()=>{

};

function dance(v1){
    console.log(`${v1} is dancing`);
};

dance('dog');
dance('cat');
    

function add(v1, v2){
    console.log(v1 + v2);
}

add(2,3)

// Default , rest and spread parameters
function addition(v1 = 0 , v2= 0){ //we gave a default value to v1 and v2 as 0
    console.log(v1+v2);
}

addition(30,40);

//When we have multiple arguments then we have to create that much numbers of parameters. to avoide this we use rest operator (...)<--- this is called rest operator. If we use ... in the place of function parameter then its called rest operator .

//Example

function abcd(...val){
    console.log(val)
}

abcd(1,2,3,4,5,6,7);

// return ---> whatever the function is returnning I have to show it by storing the return value in some variable



function abcde(v){
    return 12 + v ;
} 

let val_of_abcde = abcde(23);
console.log(val_of_abcde);

//First class functions ---> In js we can we treat functions as values

//examples:
//1. store the function in a variable
const greet = function(name){
    return "Hello, " + name + "!"; 
}
console.log(greet("Alice"))

//2. Pass a function as an argument
function doMath(num, operation){
    return operation(num)
}

const double = function(x){return x*2;};
console.log(doMath(5,double));

//3. Return function from another function
function makeMultiplier(factor) {
    return function(number){
        return number * factor;
    };
}

const triple = makeMultiplier(3);
console.log(triple(7));

// high order function --> is those type of function which returns a function or accepts a function in its parameter

// here makeMultiplier is a higher order function

// function makeMultiplier(factor) {
//     return function(number){
//         return number * factor;
//     };
// }

// const triple = makeMultiplier(3);
// console.log(triple(7));


// pure vs impure function
let e = 12;
// that type of function which doesnot changes the outer value is called pure function 
//pure function
function showValue(){
    console.log("Hey! How are you?");
}

// that type of function which does chance the the outer value is called impure function
//impure function
function incrementVal(){
    e++;
    console.log(e)
}

showValue();
incrementVal();


//closure -> A function which returns another function and the returned function always use a variable of the parent function

function ready(){
    let a = 100;
    return function(){
        console.log(a);
    }
};
ready()();
//or
let fn = ready();
fn();

//IIFE (Immediately Invoked Function Expression)
(function(){
    console.log(100 * 4)
})();


/* Q1. Whats's the difference between function declaration and expression in terms of hoisting ?
Ans: Function declaration can be hoisted but function expression can not be hoisted.
*/

/* 
Example of fat-arrow function --->
let multiply = (a,b)=>{
    return (a*b);
};
*/

// Use rest parameter to accept any number ofscores and return the total

function getScore(...scores){
    let total = 0
    scores.forEach(function(val){
        total = total + val ;
    });
    return total ;
}

console.log("Total Score",getScore(10, 20 ,30 ,40 ,50 ,60));


// Pass a function into another function and execute it inside.

function ab(val){
    val();
}

ab(function(){
    console.log("Hey");
})

// Closure examples ---->
// Q1.
function outer(){
    let count = 0;
    return function (){
        count ++ ;
        console.log(count);
    };
}

let counter = outer()
counter();
counter();

//Q2.
function createGreeting(name){
    return function() {
        console.log(`Hello, ${name}`)
    }
}

const greetJhon = createGreeting("Jhon");
const greetJane = createGreeting("Jane");

greetJhon();
greetJane();

//Q3.
// for(var k = 0 ; k < 3 ; k++) {
//     (function(j) {
//         setTimeout(function(){
//             console.log(j);
//         }, 1000);
//     })(k);
// }

for(let k = 0 ; k < 3 ; k++){
    setTimeout(function(){
        console.log(k);
    }, 1000);
}


// Predict the output:
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

let fn1 = outer();
fn1();

x = 20;
fn1();

//What is the use of IIFE ? Name one real-world use case.
let showScore = (function (){
    let score =0;
    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val ;
        },
    };
})();

// Write a BMI calculator
function bmi (weight , height) {
    return weight / (height**2) ;
}
console.log(bmi(75, 1.8).toFixed(2))

// Create a reuseable calculator 
function discountCal (discount){
    return function(price){
        return price - price*(discount/100);
    };
}

let discounter = discountCal(10);
console.log(discounter(200));

function counter1 () {
    let count = 0;
    return function () {
        count++;
        return count ;
    };
}

let c = counter1();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

// create a pure function to transforme a value
function doubleD(val){
    return val * 2;
}

console.log(doubleD(100));

//Use IIFE to isolate variables
(function() {
    const password ="secret key";
    console.log(password);
})();

// password is scoped inside the IIFE above, so it cannot be accessed here.
// console.log(password());

// Arrays
let arr1 = [1, 2, 3, 4];
arr1 [2] = 12;

console.log(arr1);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.push(6);
arr2.pop();//it removes the value from the last
arr2.shift()// it removes the value from first
arr2.unshift(10);//it add the value at the beginning
arr2.splice(2, 1)// it takes two parameters (index,how many values will be removed from that index) which will
arr2.slice(0, 3)// Returns a copy of a section of an array. 
//rev_arr2 = arr2.reverse()



let arr3 = [11, 63, 4, 90, 20];
let sr1 = [...arr3].sort(function(a,b){
    return a - b ;// this is sort the array into ascending order 
});

let sr2 = [...arr3].sort(function(a,b){
    return b - a ;// this is sort the array into descending order .
});

console.log(sr1);
console.log(sr2);

// forEach
arr3.forEach(function(val){
    console.log(val+5);
});

// 


// Map ---->

let arr4 = [ 11, 62 , 3, 4 , 25]

// we only use map when we neend an another array on the basis if the previous arrays data.
//when see a map function we will create another blank array in our mind.

let new_arr = arr4.map(function(val){
    if (val > 10) return val;
})


// filter ----->

let arr5 = [ 1, 2, 3, 4, 5, 6, 7]

let new_arr5 = arr5.filter(function (val){
    if (val > 4 ) return true;
})

// reduce ---->
let arr6 = [10 ,222, 39, 4, 95, 906]

let ans01 = arr6.reduce(function(accumulator , val){
    return accumulator + val;
}, 0);

//<<<<<---------------------->>>>>

//Q1. Create an array with theree fruits and print the 2nd one.

let fruits = ["Apple" ,"Banana","Guava"];
//Ans ---> fruits[1]
fruits.push("Mango");
fruits.unshift("Pineapple");

//Replace banana with kiwi in the array above
let index = fruits.indexOf("Banana");

if (index !== -1) {
    fruits[index] = 'Kiwi' ;
}

console.log(fruits)


let colors = ["Green" , "Yellow"];
colors.splice(1 , 0 , "Red" ,"Blue")

let arr_11 = [ 100, 88, 9, 200]

arr_11.sort((a,b) => a - b);


//<----- Objects ----->
let obj1 = {
    firstName : "Sandipan ",
    lastName : "Chowdhury" ,
    age: 27,    
};

let role ="admin"
const user = {
    firstName : " Sandipan",
    lastName : "Chowdhury",
    address: {
        city: 'Kolkata',
        pin: 700074,
        location: {
            lat: 22.5744 ,
            lng: 88.3629 
        },
    },
    [role]: "Sandipan",
};

let {lat ,lng} = user.address.location;

//--- for in ---

for (let key in user) {
    console.log(key , user[key]);
}

console.log(Object.keys(user))

//let user2 ={... user} ----> this is not the right way to copy while we are having nested object

let user2 =JSON.parse(JSON.stringify(user)); // this is the right way

//Use Object.entries() to print all key-value pairs as:
//title: JavaScript
//duration: 4 weeks

const course = {
    title: " JavaScript",
    duration: " 4 weeks",
};

Object.entries(course).forEach(function (val){
    console.log(val[0] + ":" + val[1]);
})


//---------DOM --- Document Object Model -----------
