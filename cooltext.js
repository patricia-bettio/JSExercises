"use strict"

window.addEventListener("DOMContentLoaded", init);

let txtElement = document.querySelector("#cooltext");
console.log(txtElement)
let sentence = document.querySelector("#cooltext").textContent;
console.log(sentence)

let counter = 0;
let oneLetter;

function init(){
    txtElement.textContent="";
    showText();
}

function showText(){
/* console.log(sentence.substring(0, counter+1))
  console.log(sentence.substring(1, counter+2))
  console.log(sentence.substring(2, counter+3))  */
 // oneLetter = sentence.substring(0, counter+1);
  //console.log(oneLetter)
  //txtElement.textContent = oneLetter;
//console.log(sentence.length)
  for (let i = 0; i <= sentence.length; i++) { 
  oneLetter = sentence.substring(i+1,`${counter + [i]}`);
 // console.log(txtElement.textContent)

 animate();
  //create span element
 //oneLetter = document.createElement("SPAN");
 //console.log(document.createElement("SPAN"))
//oneLetter.style.setProperty("animation-timing-function: ease-in");
//document.body.appendChild(oneLetter);
 //put the character inside
//console.log(oneLetter)
  setTimeout( 400)
}
}
function animate(){
    console.log(oneLetter)
  // console.log(oneLetter.textContent);
  
 }