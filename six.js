// ******************COMPARISON*****************

console.log(2>1);//true

console.log(2>=1);//true

console.log(2<1);//false

console.log(2==1);//false

console.log(2!= 1);//true

console.log("2">1);//true "2" apne aap number me convert ho gya
console.log("02">1);//true

// so always keep in mind that if you wanna compare different datatypes you will
// get unpredictable results , so make sure that when you are comparing datatypes should be same

// on the other hand typescript will not allow you to compare different datatypes


// ***************totally unpredictable result********************
// avoid this types of comparison these are always confusing :-
console.log(null >0);//false
console.log(null==0);//false
console.log(null>=0);//true  here value shayad convert ho gya

// problem:- there is a different way of working for comparison operator and equality operator

/* The reason is that an equality check == and comparisons > < >= <= work differently
comparisons convert null to number . treating it as 0, that's why null >=0 
beacme true and nul>0 became false
*/ 

console.log(undefined ==0);//false
//undefined is not converted into zero so the above three expression will become false

// == and === has different syntax of working

// *********strict check**************(===)

// this not only checks the value  but also compares the datatype of the value:-

console.log("2"===2);//false



