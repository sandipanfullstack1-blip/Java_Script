//---------DOM --- Document Object Model -----------
/*DOM Selectors Quick Notes
getElementById("id") → Selects one element by its unique id; returns a single element object or null.

const title = document.getElementById("heading");

getElementsByClassName("class") → Selects all elements with the given class; returns a live HTMLCollection.

const items = document.getElementsByClassName("item");

querySelector("selector") → Selects the first matching element using any CSS selector.

const btn = document.querySelector(".btn");

querySelectorAll("selector") → Selects all matching elements using any CSS selector; returns a static NodeList.

const buttons = document.querySelectorAll(".btn");

*/ 

// let h1 = document.querySelector("h1");
// h1.innerHTML="<i>Hey</i>";
// h1.draggable = true

// console.dir(h1)

// // let a = document.querySelector("a")
// // a.setAttribute("href" ,"https://www.google.com");
// // console.dir(a);


// let img = document.querySelector("img");
// img.setAttribute(
//     "src", 
//     "https://images.unsplash.com/photo-1769031185750-17e50e35eb73?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ); 

// console.dir(img)

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let h1 = document.createElement("h1");
// h1.textContent ="Hello Ji";
// document.body.append(h1)
// // document.body.prepend(h1);


//T1: Select the heading of a page by ID and change its text to "Welcome to My Web-Page"
let heading = document.querySelector("#heading");
heading.textContent ="Welcome to My Web-Page"

// Select all <li> elements and print their text using a loop
let lis = document.querySelectorAll("li");
lis.forEach (function(val){
    console.log(val.textContent);
});

// What's the difference between innerText , textContent, and innerHTML

//Select a paragraph and replace its content with:
/* <b>Updated</b> by JavaScript */

// let p =document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by JavaScript"

//How do you get the src of an image using JavaScript?
let image = document.querySelector("img");
console.log(image.src); // 1st process
console.log(image.getAttribute("src"))// 2nd process

//What does setAttribute() do?
document.querySelector("img").setAttribute(
    "src",
    "https://media.istockphoto.com/id/1306060608/photo/abstract-blurred-background-with-lighting-effect-for-graphic-design.jpg?s=612x612&w=is&k=20&c=3c3H1DD9C5yHCJHj2-HohY4k8wSABmaimTT2NhDOY-Y="
);

// Select a link and update its href to point to https://sheryians.com
let a = document.querySelector("a")
a.href = "https://www.sheryians.com"


// Add a title attribute to a div dynamically
let div = document.querySelector("div");
div.setAttribute("title" ,"some info");

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// What does createElement() do? what's returned ?

// Create a new list item <li>New Task</li> and add it to the end of a <ul>

// let ul = document.querySelector("ul");
// let li = document.createElement("li");

// li.textContent = "New Task";

// ul.appendChild(li);


// Create a new image element with a placeholder source and add it at the top of a div

let img = document.createElement("img");
img.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFpNMYcP9QIDKgoxZxrFlUKMr7pb_zecgXqE-U0mTDWpgaN7DbcpK1YjE&s=10"
);

img.classList.add("placeholder");

document.querySelector("div").prepend(img); 

// Select the first item in a list and delete it from the DOM.
let ul = document.querySelector("ul")
let li = document.querySelector("li")

ul.removeChild(li) 

//Add a highlight class to every even item in a list
let even_li = document.querySelectorAll("ul li:nth-child(2n)");

even_li.forEach( function(elem) {
    elem.classList.add("highlight")
})

// Set the font size of all <p> elements to 18px using style.

// let all_p = document.querySelectorAll("p")
// all_p.forEach(function (elem) {
//     elem.style.fontSize = "18px";

// })


//=================================================================================
// EVENTS AND EVENT HANDLING

// How to use addeventListener and removeeventListener
let h1 = document.querySelector("h1");
h1.addEventListener("click" , function(){
    h1.style.color = "red" ;
}); 

let p = document.querySelector("p");

function dblclick (){
    p.style.color = "yellow";
}
p.addEventListener("dblclick", dblclick );
p.removeEventListener("dblclick", dblclick);

let input = document.querySelector("input");
let button = document.querySelector("button");


input.addEventListener("input" , function(dets) {
    console.log("Final output :" , dets.target.value);
})

input.addEventListener("keyPress" , function(event){
    if (event.key === "Enter"){
        console.log("Output:" , events.target.value);
    }
})

button.addEventListener("click" , function(){
    console.log("Output:" , input.value);
})

let sel = document.querySelector("select")
let device = document.querySelector("#device");

sel.addEventListener("change" , function(dets){
    device.textContent = `${dets.target.value} Selcted as Device`;
    console.log("Device Choosed:",dets.target.value);
})






