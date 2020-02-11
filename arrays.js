"use strict";

const test = "test test"
console.log(test)

//1- create an array

/* let letters = ['a','b','c','d','e'];
console.log(letters)
let ex1 = letters[3];
console.log(ex1)
let ex2 = letters;
letters[4]= 'newInfo';
console.log(letters[4])
console.log(letters) */

//2-
//start with this array
const people = ["Harry","Ronny","Hermione"];
console.log(people)
//create an empty variable to store a RESULT
let result;
result = people.push("Draco");
console.log(result)
console.log(people)

result = people.pop();
console.log(result)
console.log(people)

result = people.push("Neville");
console.log(result)
console.log(people)

result = people.push("Luna");
console.log(result)
console.log(people)

result = people.slice(0,3);
console.log(result)
console.log(people)

//why result empty array? doesnt remove anyone, juts adds
result = people.splice(1,0,"Cho");
//1,2 is removing 2 names, reason why result shows the new array
//result = people.splice(1,2,"Cho");
console.log(result)
console.log(people)

//assign to position 1 ginny
people[1] = "Ginny"
console.log(result)
console.log(people)


result = people.push("Fred","George");
console.log(result)
console.log(people)


result = people.indexOf("Fred");
console.log(result)
console.log(people)


result = people.splice(result,1);
console.log(result)
console.log(people)