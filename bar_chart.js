 "use strict";
window.addEventListener("DOMContentLoaded", init);

function init(){
  loop();
 setHeight();
}

let array = [];

function loop(){

  function getNumbers(){
    return Math.floor(Math.random() * 32);
  }

  const queueSize = getNumbers();
  //console.log(queueSize)
 

if (array.length < 20) {
  array.unshift(queueSize);
    setTimeout(loop, 400)
    console.clear()
    console.log(array)
    //for each new number in,:
    setHeight();
    
    
} else {
  array.pop();
  setTimeout(loop, 400)
  //console.log(array[0])
}
  }
  


 function setHeight(){   
//find the current number: console.log(array[0])
console.log(array[0])
for (let i = 0; i<array.length; i++){
  let oneBar;
  oneBar=document.querySelector(`#bars > div:nth-child(${i+1})`);
  oneBar.style.setProperty("--barHeight", array[i]);
}
}
//pattern

/* const oneBar = document.querySelector("#bars > div:nth-child(1)");
oneBar.style.setProperty("--barHeight", array[0]); 

const oneBar2 = document.querySelector("#bars > div:nth-child(2)");
oneBar2.style.setProperty("--barHeight", array[1]); 

const oneBar3 = document.querySelector("#bars > div:nth-child(3)");
oneBar3.style.setProperty("--barHeight", array[2]);  */

//test
//oneBar.style.height="100px";



 