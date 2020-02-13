"use strict"
const test = "testando";
console.log(test)

let counter = 0;

// while (counter<10){
//     console.log(counter)

// }

//1- From 0 to 9
for(let counter= 0; counter<10; counter++) {
    console.log("From 0 to 9:", counter)
}
console.log(`after the loop, counter is ${counter}`);

//2- From 1 to 10
for(let counter=1; counter<11; counter++) {
    console.log("From 1 to 10:", counter)
}
console.log(`after the loop, counter is ${counter}`);

//3- From 10 to 0
 for(let counter=10; counter>=0; counter--) {
console.log("From 10 to 0:", counter)
} 
console.log(`after the loop, counter is ${counter}`);

//4- From 1 to 19, but all the odd numbers (1, 3, 5, 7,...)
for(let counter=1; counter<20; counter+=2) {
    console.log("Odd #: 1 to 19:", counter)
}
console.log(`after the loop, counter is ${counter}`);

//5- From 1 to 16777216, but doubling each time (2, 4, 8, 16, ....)
for(let counter=1; counter<16777217; counter*=2) {
 console.log("1 to 16777216, doubling:", counter)
}
console.log(`after the loop, counter is ${counter}`);

//6- From 111 to 138, in steps of 3 (meaning the 2nd number is 114(111+3))
for(let counter=111; counter<139; counter+=3) {
   console.log("111 to 138:", counter)
   }
   console.log(`after the loop, counter is ${counter}`);

//7- From 100 to 0 in steps of 10
for(let counter=100; counter>=0; counter-=10) {
   console.log("100 to 0:", counter)
    }
    console.log(`after the loop, counter is ${counter}`);