// let h1 = document.querySelector("h1")

// window.addEventListener("keydown", function(dets){
//     if (dets.key === " ") {
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = dets.key;
//     }   
// })

// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click" , function(){
//     fileinp.click();
// });

// fileinp.addEventListener("change" , function(dets){
//     const file = dets.target.files[0];
    
//     if (file){
//         btn.textContent = file.name;
//     }   
// });

// let form = document.querySelector("form")
// let inputs  = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit" ,function(dets){
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute(
//         "src",
//         inputs[0].value,
//     );

//     let h3 = document.createElement("h3");
//     h3.textContent=inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if (inp.type !== "submit"){
//             inp.value = "";
//         }
//     })

// })

// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover" , function(){
//     abcd.style.backgroundColor ="yellow";
//     abcd.addEventListener("mouseout" , function(){
//     abcd.style.backgroundColor ="red";
//     })
// })

// window.addEventListener("mousemove", function(dets){
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// })


/*
Event bubbling -
If event comes on an item and and if there is no listener on thath item,then the event goes to the parent of that item to search for listener and this process will continue to the upward direction till it finds any listener.
*/

// document.querySelector("#nav").addEventListener("click" ,function(){
//     alert("clicked");
// })


// let ul = document.querySelector("ul")

// ul.addEventListener("click", function(dets){
//     dets.target.classList.toggle ("lt");
// })

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click" , function (){
//     console.log("button clicked");
// })

// c.addEventListener("click" , function (){
//     console.log("c clicked");
// }, true)

// b.addEventListener("click" , function (){
//     console.log("b clicked");
// })

// a.addEventListener("click" , function (){
//     console.log("a clicked");
// }, true);

/*
When we click someting or raise any event then the event flow happens in two phases.

Phase 1: Event goes from top level elemt to bottom level element. (Capture Phase)[Bydefaul its been off, by writtig 'true' we activate it ]
Phase 2: The element which raise the event goes to the parent. (Bubbling Phase)

but first the phase 1 happens.  
*/ 

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input" , function(){
//     let left = 20 - inp.value.length;
//     span.textContent = left;
//     if (left < 0){
//         span.style.color = "red";
//     }
//     else{
//         span.style.color = "white";
//     }
// });

//============= Forms and Form Validation ====================

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit" , function(dets){
//     dets.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display = "initial";
//     } 
//     else{
//         document.querySelector("#hide").style.display = "none";

//     }
// })

/*
Regex (Regular Expression): A regex is a pattern used to match, validate, or search text in a string. In JavaScript, it's commonly used with the .test() method for validation.

Username Validation

Requirement: Starts with a letter, contains only letters, numbers, and _, and is 5–15 characters long.

Example 1:
const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{4,14}$/;

console.log(usernameRegex.test("Sandipan_01")); // true
console.log(usernameRegex.test("1Sandipan"));   // false
Email Validation

Example 2
Requirement: A valid email like user@gmail.com.

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

console.log(emailRegex.test("sandipan@gmail.com")); // true
console.log(emailRegex.test("sandipan@gmail"));     // false

Tip: Read regex from left to right. Each part of the pattern represents one requirement (start, allowed characters, length, @, ., end).
*/ 

// let email= document.querySelector("#email");
// let password= document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit" , function(dets){
//     dets.preventDefault();

//     document.querySelector("#emailError").textContent = "";
//     document.querySelector("#passwordError").textContent ="";
    
    

//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);
    
//     let isValid = true;

//     if(!emailans) {
//         document.querySelector("#emailError").textContent = "Email is Incorrect" ;
//         document.querySelector("#emailError").style.disply = "initial";
//         isValid= false ;
//     }

//     if (!passwordans){
//         document.querySelector("#passwordError").textContent = "Password Format is Wrong";
//         document.querySelector("#passwordError").style.disply = "initial";
//         isValid = false;
//     }

//     if(isValid){
//         document.querySelector("#successMessage").textContent = "Everything is Correct and Submitted Successfully"
//     }
//     else{
//         document.querySelector("#successMessage").textContent ="";
//     }

// }) 


//setTimeout:

setTimeout(function(){
    console.log("hey");
    console.log("Set-Timeout");
}
,2000)

//Set Interval

// setInterval(function(){
//     console.log("Hello");
// }, 2000);

