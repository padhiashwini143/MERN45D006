// console.log(document.body)

// const h1Arr=document.getElementsByTagName("h1")
// console.log(h1Arr)
// console.log(h1Arr[0])
// console.log(h1Arr[1].innerText)

// // getElementById()
// const p=document.getElementById("para");
// console.log(p.innerText)

// const pArr=document.getElementsByClassName("paragraph");
// console.log(pArr)


const p=document.querySelector("#para");
console.log(p)
const pArr=document.querySelectorAll(".paragraph");
console.log(pArr)

const h1=document.querySelector("h1");
console.log(h1)
console.log(h1.innerText)
console.log(h1.textContent)
// // h1.innerText="this is changed innertext"
// console.log(h1.innerText)
// console.log(h1.innerHTML)
// console.log(h1.tagName)

console.log(h1.getAttribute("style"))

h1.setAttribute("id","heading1");
console.log(h1)

h1.style.backgroundColor="red";
// h1.style.fontSize="35px";

h1.style.cssText="background-Color:blue;font-size:35px"


// createElement
const h2=document.createElement("h2");
h2.innerText="this is heading 2"
console.log(h2)


const div=document.querySelector("div");

div.append(h2,h1)

console.log(document.body)
