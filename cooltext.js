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

/* function showText(){
  //console.log(sentence.substring(0, counter+1))
  //console.log(sentence.substring(1, counter+2))
  //console.log(sentence.substring(2, counter+3))

  for (let i = 0; i <= sentence.length; i++, setTimeout(500)) { 
      
  oneLetter = sentence.substring(i+1,`${counter + [i]}`);
 txtElement.textContent = oneLetter
  console.log(oneLetter)
  setTimeout( 400)
}
} */


//test2

function showText(){
    console.log(sentence.split(""));
    let splitArray = sentence.split("")
    for (let i = 0; i < sentence.length; i++) {
        splitArray[i];
        console.clear()
       // console.log(splitArray)
       let getOne = document.createElement('span'); 
       getOne.innerText = splitArray[i];
       txtElement.appendChild(getOne);


    }
    console.log(splitArray)
    console.log(txtElement)
}
