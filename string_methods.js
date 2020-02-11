//1- Find the unicode code for santa = "🎅"; 

/* const santa = "🎅";
console.log(santa.substring(0, 6)) */

//Check if a filename ends in ".jpg" or not 

/* const file = "http://127.0.0.1:8080/string_methods.html"
console.log(file.endsWith(".html"))
console.log(file.endsWith(".jpg"))
 */
//Check if a name has a hyphen in it 

/* console.log('my name is'.includes('-'))
console.log('my name-is'.includes('-')) */

//Find the end of the first name in a full name 

/* const fullName = "Patricia de Figueiredo Bettio";
const firstSpace = fullName.indexOf(" ");
console.log(fullName.substring(0, firstSpace)) */

//Find the beginning of the last name in a full name 

/* const fullName = "Patricia de Figueiredo Bettio";
const lastSpace = fullName.lastIndexOf(" ");
console.log(lastSpace) 
const lastName = fullName.substring(lastSpace,);
console.log(lastName.substring(1,2)) */

//Figure out if "Aalborg" is sorted before or after "Alerup" in danish 

/*  console.log('Aalborg'.localeCompare('Alerup', 'da-DK'));
//result -1: Aalborg comes before. +1 w after. (english version shows -1) */

//Add dots to a string, so it becomes at least 20 characters long 

/*  const form = "fill out the gap ";
 const dash = "_ ";
 const field = form+dash.repeat(20);
 console.log(field) */

//Add spaces before a text, so it is at least 10 characters 

 /* const sentence = "life";
 const space = " ";
 console.log(space.repeat(10)+sentence) */

//Replace a string of any number of characters, with the same number of *s 
//QUESTION trocar todos os caracteres eses sendo diferentes tipo auhauahuah
/* const string = "aaaaaaaa";  
console.log(string.replace(/a/g, "*s")) */

//Change all "å" in a text to "aa" 

/*  const word = "hi this is å råndom sentence thåt meåns nothing";
 console.log(word.replace(/å/g, "aa")) */




//Remove any double- or triple- spaces in a text 
//QUESTION- OQ EH O G, COMO FAZER O | PARA CONDICAO OU
/* const text = "Single space .Double  space  .Triple   space   ."
console.log(text)
//all spaced console.log(text.replace(/\s/g, ""))
console.log(text.replace(/\s{3}|\s{2}/g, ""))
 */

//Get the last 10 characters of a name 
/* const name = "Patricia de Figueiredo Bettio"
const len = name.length;
console.log(name.substring(len-10)) */

//Separate a comma-separated list into an array of individual items 

/* const list = "turtle, duck, puppy, pupper, dog, doggo";
console.log(list)
const regex = /, /g;
const newlist = list.split(regex)
console.log(newlist) */


//Check out if an url begins with "http://" or "https://" 

/*  const url1 = "http://www.google.com"
 const url2 = "https://google.com"
 console.log(url1.startsWith("http"))
 console.log(url1.startsWith("https"))
 console.log(url2.startsWith("https")) */