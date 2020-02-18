"use strict"

let firstName= "Patricia";
let animalstyle = "dog";
let animalName = "Snoopy";

function presentPet(firstName, animalType, animalName, animalAge){
    console.log(`my name is ${firstName}, I have a ${animalType} called ${animalName}`)
    if (animalAge === undefined){
        console.log(`my name is ${firstName}, I have a ${animalType} called ${animalName} and I do not know the age`) 
    }

};

presentPet(firstName, animalstyle, animalName);

//mesmo se trocar funciona pq oq roda primeiro eh a ultima linha, chamando a funcao,
//e oq ela puxar de dado vai ser populado na funcao. entao a linha 7 corrre depois. por isso mesmo mudando o nome ainda funciona/

