const name = "patricia";
console.log(name)

//grab the 3rd letter
const letter3 = name.substring(2, 3);
console.log(letter3)

//make the 3rd letter Uppercase
const newLetter = letter3.toUpperCase();
console.log(newLetter)

//final combination
console.log(name.substring(0,2)+newLetter+name.substring(3,))

//OR

//shortway

console.log(name.substring(0,2)+name.substring(2,3).toUpperCase()+name.substring(3,))

//OR using Lowercase

console.log(name.substring(0,2).toUpperCase()+name.substring(2,4).toLowerCase()+name.substring(4,).toUpperCase())


//modify 1st letter only

console.log(name.substring(0,1).toUpperCase()+name.substring(1,).toLowerCase())

const anotherName = "richard"
console.log(anotherName.substring(0,1).toUpperCase()+anotherName.substring(1,).toLowerCase())