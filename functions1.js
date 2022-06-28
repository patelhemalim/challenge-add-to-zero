// Funcitons 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------



// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true

// const favNum = 9;
// const numBool = Boolean(favNum);
// console.log(numBool);

// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true
 
//const myString = '';
//const myStringBool = Boolean(myString);
// console.log(myStringBool);


// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0

//const artLover = false;
//const artBool = Number(artLover);
// console.log(artBool); 

// create a variable equal to a string of numbers, on the next line convert that string into a number using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the

let numString = '1234';
let convertedString = +numString;
console.log(numString, convertedString);


// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, console.log it and the result will be the same as the other two versions

let inOneLine = +'1234';
console.log(inOneLine);


// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail


let myHeight = '49inches';
let withNum = Number(myHeight);
let withParse = parseInt(myHeight);
console.log(withNum,withParse);



// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors

let myAge = 33;
let ageToString = String(myAge);
console.log(myAge,ageToString);




// create another variable but this time use concatenation of empty quotes to turn your number into a string


let ageToString2 = myAge + ' ';
console.log(ageToString2);



// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string

const loveArt =true;
let doYouLoveArt = ' Do I love art ?yes, that is '+loveArt;
console.log(loveArt, doYouLoveArt)



// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, starts with, and ends with the letter(s) you input as parameters
const myName = 'hemali';
// .includes()
console.log(myName.includes('ma'));
// .startsWith()
console.log(myName.startsWith('h'));
// .endsWith()
console.log(myName.endsWith('y'));


// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the words in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces
const lotsSpaces = '  This is crazy   ';
let noMoreSpces = lotsSpaces.trim();
console.log(noMoreSpces)

// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)

let lowercase = 'this is my name';
lowercase = lowercase.toUpperCase()
console.log(lowercase)

// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string

let myFaveVine = 'Road work ahead ? Uh yeah , I sure hope id does!'
let notFirst = myFaveVine.replace('a','j');
console.log(notFirst);
let notFirst1 = myFaveVine.replace('a','j');
console.log(notFirst1)

// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference

let sentence =  'hi , i am super girl'
let splitSpace = sentence.split(' ');
let splitComa = sentence.split(',');
let splitEmpty = sentence.split('');

//console.log(splitSpace);
//console.log(splitComa);
//console.log(splitEmpty)
// Joinging Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
// console.log them to see the difference
const namea =['hemali,minesh,misha,haya'];
let joinNothing = namea.join();
let joinEmpty = namea.join('');
let joinSpace =namea.join(' ');
let joinPlus = namea.join(' + ');


// console.log(joinNothing);
// console.log(joinEmpty);
// console.log(joinSpace);
// console.log(joinPlus);

function noParams(){
    //console.log('function has no parameters')
}
 
function oneParams(word){
    //console.log(`The word I chose is ${happy}')
}
// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function



// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error

let oterVar = " I'm in the oter scope !";
 




// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code
 function rooter(num){
     return Math.sqrt(num)
 }
 const rooter2 = function(num){
     return Math.sqrt(num)
 }
 const rooter3 = (num) => {
     return Math.sqrt(num)
 }
  
 console.log(rooter(0))
 console.log(rooter2(0))
 console.log(rooter3(0))

// then show an arrow function with implicit return as well

const implicit = word => `This arrow function has ${word} return.`;
console.log(implicit('implicit'))



