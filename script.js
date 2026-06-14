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

  