//array will be: counter start at 0 + 1.. and so on
//create empty array

//set empty variable for number store
/* let array = [0]
console.log(array)


let number = 1;
console.log(number)
console.log(array.push(number))
console.log(array)
++number;
console.log(array.push(number))
console.log(array)

++number;
console.log(array.push(number))
console.log(array)

++number;
console.log(array.push(number))
console.log(array)

++number;
console.log(array.push(number))
console.log(array)

++number;
console.log(array.push(number))
console.log(array) */

//if array reaches 9 elements, run again
"use strict";

window.addEventListener("DOMContentLoaded", loop);

const array = [];
let number = 0;

function loop(){
     
    console.clear()
console.log(array.unshift(number))
++number;

console.log(array)

if (array.length < 9) {
    setTimeout(loop, 300)
} else {
console.log(array.pop())
setTimeout(loop, 300)
}

}

console.log()


//se setar a array.lengh = 9 ele automaticamente exclui, sme precisar excluir

/* var array = [0];
var counter = array.push(1);

function loop(){ 
console.log(array);
// Console will output 1, 2, 3, 4, 5, 6

console.log(counter);
// Console will output 6

if (array.length < 10) {

    ++counter;
  
   
}

}
 */