 "use strict";
window.addEventListener("DOMContentLoaded", loop);

let array = [];

function loop(){

  function getNumbers(){
    return Math.floor(Math.random() * 38);
  }

  const queueSize = getNumbers();
  //console.log(queueSize)
 

if (array.length < 10) {
  array.unshift(queueSize);
    setTimeout(loop, 300)
    console.clear()
    console.log(array)
    
} else {
  array.pop();
  setTimeout(loop, 300)
}
  }