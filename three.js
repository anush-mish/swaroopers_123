// earlier javascript was not having classes modules and arrow functions
// so in order to treat the older java script as new we write "use strict"; =>treat all js code as newer version of js...
// but now it is not necessary to mention it because now ass the codes are already considered in strict mode..
// but it is a good practice to write it.

"use strict";

// alert("hello")  //it will not give the popup over here
//it will give you an error => in node it will not run.
//it runs properly in browser actually but not in node..
// where to write semicolon and where not to write it??
// answer:- we write ; for  "readability"

console.log(3+3); console.log("Me") //not write like this
// if you have the option for writing in separate lines then why to write in same line and make it less readable
// for the user

console.log(4
    +3
)

//please yesab harqat nhi "not a good practice "
// code readability is our 1st priority

// documentation => most preferable :- MDN (but it is not the original documentation it's the documentation from mozilla)
// ecma script is the original documentation for js standards

// ECMA AND MDN =>GOD DOCUMENTATION

let name="Anushka";
let age=18;
let isLoggedIn=false;
let state;


        // primitive data types:-
// number => 2 to the power 53
// bigint => trading stock market
// string =>can be written in either '' (single quotes) and " "(double quotes)
// but preferable is " double quotes "
// boolean => either true or false
// null => stand alone value (special type)=> representation of empty value 
// undefined ;
// symbol => react has more use of it ; used for finding uniqueness in elements ;figma tools also used symbols


//  non primitive data-types:-
// OBJECT

console.log(typeof "anushka"); //=> string
console.log(typeof null); //=> object //also called as error of the language
console.log(typeof undefined);//=>undefined

// mdn documentation


