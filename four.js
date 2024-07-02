let score=33;
console.log(typeof score);

// here why we are checking the type as we already know the type , the reason is that
// when we accept the request from frontend to the backend there we are not able to know the type of the
// entered datatype

// for example:-
// const {score}=req.body; //like this 

console.log(typeof(score));//so typeof() can be defined as a method also //number

let score1="33";
// now suppose that you have received the score as string but you want it to be in number then you will have to a 
// type conversion over here:-

console.log(typeof score1); //string

let valueInNumber=Number(score1);
console.log(typeof valueInNumber); //number

// now here a new story begins that is :- kya har ek cheez jo string hogi wo number me convert ho jaegi??

// for example:-

let num="123a";
console.log(typeof num)//string
let valueNum=Number(num);
console.log(typeof valueNum);//number

console.log(valueNum); //NaN (Not a Number)

console.log(typeof NaN); //number  :|

//js ke nashe

console.log(typeof null); //object

console.log(typeof undefined); //undefined

let demon=null;
let valueDemon=Number(demon);
console.log(typeof valueDemon);//number
console.log(valueDemon);//0

let kimchi=undefined;
let valueKimchi=Number(kimchi);
console.log(typeof valueKimchi);//number
console.log(valueKimchi);//NaN

// "33" => 33
//"33abc" => NaN
//  true => 1 ; false => 0

// let isLoggedIn=1;
// let boolIsLoggedIn=Boolean(isLoggedIn);
// console.log(boolIsLoggedIn);//true

// let isLoggedIn="anushka";
// let boolIsLoggedIn=Boolean(isLoggedIn);
// console.log(boolIsLoggedIn);//true

// let isLoggedIn="";
// let boolIsLoggedIn=Boolean(isLoggedIn);
// console.log(boolIsLoggedIn);//false

// let isLoggedIn=0;
// let boolIsLoggedIn=Boolean(isLoggedIn);
// console.log(boolIsLoggedIn);//false

// 1 => true; 0 => false
// "" => false
// "anushka" => true

// String conversion are also there:-

let someNumber=33;
let stringNumber=String(someNumber);
console.log(typeof stringNumber);//string
console.log(stringNumber);//33

// object conversions array coneversions are also there , we will get to know about it
// when we will be working on forms and projects in js....


// outputes at once, to remove confusion:-
// number
// number
// string
// number
// string
// number
// NaN
// number
// object
// undefined
// number
// 0
// number
// NaN
// string
// 33
