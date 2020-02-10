"use strict"


/* // 3 names exercise

const name = "Patricia Figueiredo Bettio";
const len = name.length;
// console.log(len)
const firstSpace = name.indexOf(" ");
console.log(firstSpace)
const secondSpace = name.indexOf(" ", firstSpace+1);
console.log(secondSpace)

const firstName = name.substring(0, firstSpace);
console.log(firstName)

const secondName = name.substring(firstSpace, secondSpace);
console.log(secondName);
 */


 //4 names exercise

 const name = "Patricia de Figueiredo Bettio";

 //find 1st space

 const firstSpace = name.indexOf(" ");
 console.log(firstSpace)

 //find 2nd name

 const secondSpace = name.indexOf(" ", firstSpace+1);
 console.log(secondSpace)

 //find 3rd name
 const thirdSpace = name.indexOf(" ", secondSpace+1);
 console.log(thirdSpace)

 //build names

 const firstName = name.substring(0, firstSpace);
 console.log(firstName)

 const secondName = name.substring(firstSpace, secondSpace);
 console.log(secondName)

 const thirdName = name.substring(secondSpace, thirdSpace);
 console.log(thirdName)
