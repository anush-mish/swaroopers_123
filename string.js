const name="Anushka";
const repoCount=18;
console.log(name+repoCount+" value");
// here also a newline is present at the end of the 1st print statement
// but this way of doing concatination is not that good 

// now we use backticks for Concatination  as follows:-

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// here comes the concept of string interpolation
// here we make place holders and then inject the elements onto them
// so we can see that it is a more convenient way of writing 

// here inside the ${} you can easily use any function

const gameName=new String('Anushka');
console.log(gameName);
// [String: 'Anushka']

// here we have the concept of constructor and object;
// in an object string exists in the form of key value pair 
// it has a length and index there fore it has many properties 

console.log(gameName[0]);
console.log(gameName[8]);//undefined

// in this manner you can access the values present at different index positions

// prototype in string can be accessed as follows:-

console.log(gameName.__proto__);//{}

// here for the above you can see you have got an empty object as an output but it is not actually empty 
// it has a certain key value pair present inside it

// 0
// : 
// "A"
// 1
// : 
// "n"
// 2
// : 
// "u"
// 3
// : 
// "s"
// 4
// : 
// "h"
// 5
// : 
// "k"
// 6
// : 
// "a"
// length
// : 
// 7

console.log(gameName.length);//7
console.log(gameName.toUpperCase());//ANUSHKA

console.log(gameName.toUpperCase);//[Function: toUpperCase]


