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

const array = [0];
    console.log(array)
        
    let number = 1;

function loop(){
 if (array.length < 10) {
console.log(array.push(number))

++number;
console.log(array)
setTimeout(loop, 300)
 } 

}