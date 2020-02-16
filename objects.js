"use strict"
/* //example 1
   //basic objects - assigning and modifying
let person1 = {
    firstName : "Patricia",
    age : "30"
    //student: false
};

console.log(person1)
console.log(`${person1.firstName} is ${person1.age} years old`)

//let name = person1.firstName;
//console.log(name)

//modifying
person1.lastName = "Bettio";
console.log(person1.lastName)
person1.age++;
console.log(person1)

 */
/* //example2
   //same object, different variables
 const person1 = {
    firstName : "Patricia",
    age : "30"
    //student: false
};

const person2 = person1;
person2.firstName = "Kostas"
console.log(person1.firstName)
console.log(person2)
console.log(person1) */

/* //example 3
let person1 = {
    firstName : "Patricia",
    age : "30",
    students: true
};
let person2 = {
    firstName : "Kostas",
    age : "33",
    student: false
};

let person3 = person1;

person3.firstName="Duck"
console.log(person1) */


/* //example 4 
//comparing

const student1 = {
    firstName: "Harry",
    lastName: "Potter"
}

const student2 = {
    firstName: "Harry",
    lastName: "Potter"
}

//const student2 = student1
console.log(student2==student1)
//false because the 2 variables point to 2 DIFFERENT objects
student1.firstName = "Rony"
console.log(student1)
console.log(student2)
 */