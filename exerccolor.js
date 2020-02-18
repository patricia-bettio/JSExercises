"use strict"

    
/* function greeting(firstName){

    let value = `Hello ${firstName}`;

    return value;

    } */

 
    //this is the function that shopws result in console.log
    function getColorString(red, green, blue){

        let value = `rgb(${red}, ${green}, ${blue})`;
        return value;
        
    }

    //this is the function that sets the random number

function randomColor(){
    
    const red = Math.floor(Math.random() * 255);

    const green = Math.floor(Math.random() * 255);

    const blue = Math.floor(Math.random() * 255);

    

    return getColorString(red, green, blue);

}


//console.log(value)
function randomBackground(){
document.querySelector("body").style.backgroundColor = randomColor();
}
