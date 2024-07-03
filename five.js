// *************************operations******************

let value=3;
let negValue=-value;
console.log(negValue)//-3

console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2**3);//8
console.log(2/3);//0.6666666666666666
console.log(3%2);//1

// modulo and division has very much importance in cryptography and many algorithm

let str1="Hello";
let str2=" Anushka";
let str3=str1+str2;
console.log(str3);

// as per the common sense which is not so common these days we know that strings and only be added
//or concatenated the can't be subtracted

// now the situations  which are mentioned above were not complex they were easy peasy 
// but below are the complex situations where we are adding strings with numbers:-

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+"2")//12
console.log("1"+2+2);//122 
//if string is present in the starting then the whole expression is considered to be string

console.log(1+2+"2");//32
//jo value pehle aarhi hai ussme convert hogi agar pehle string hai tho poora 
// output string ka hoga aur agar pehle number hai toh poora output number me hoga 

// it's a self-researched topic when you will see forward for browser implementation then it's a more researched topic
// khud ka engine ya fir browser implementation me iska use ayega

// console.log(3+4*5%3) this sort of code is not appreciated in real life scenarios

// use parenthesis for solving this sort of questions

// if you are writing this sort of codes then you will not be able to merge your pull requests 
// for larger companies

// tricky conversions:-

console.log(true);//true

console.log(+true);//1
//please not write these sort of code 1st priority should be clarity and readability

// console.log(true+) error

console.log(+"");//0

let num1,num2,num3;
num1=num2=num3=2+2;

//it's basically very faaltu tareeka of writing any code please  don't write like this
// why to write like this for assigning this value , you could have directly assigned it

let gameCounter=100;
gameCounter++;//post increment
console.log(gameCounter);//101
++gameCounter;//prefix
console.log(gameCounter);//102

console.log(gameCounter++);//102

console.log(gameCounter);//103

console.log(++gameCounter);//104

// study the prefix and postfix operator from MDN 


