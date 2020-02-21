"use strict"

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParams (a, b, c, d) {
    console.log(`a: ${a}, b:${b}, c: ${c}, d: ${d}`);
}

people.forEach(testParams);

//first it shoes the names, the second b, ends up being the counter, and c the entire array.
//this happens because its the way uts supposed to be, read the MDN documentation for array.forEach
