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
 

if (array.length < 5) {
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

const oneBar = document.querySelector("#bars > div:nth-child(1)");
oneBar.style.height="100px";
//oneBar.style.setProperty("--barHeight", array[0]); 


//set the height of the bar:
//oneBar.style.height="100px";
//oneBar.style.setPrpperty("--barHeight", oneBar);


 }
 