/** Console & Basic Questions **/
//1. log " hello, Javascript" to the consile in 3 diff. ways.
//   console.log("Hello JavaScript");
//   console.error("Hello JS");
//   console.warn("Hello JS");
//   console.info("Hello JS");
//   console.table({name: "Shivam", age: 27});
  

  
//2. Perform 35*2-(10/2)+7 and log the result.
// console.log(35*2-(10/2)+7);


//3. log the data type og "123", 123, true and null using typeof.
// console.log(typeof "123");
// console.log(typeof 123);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);

 

//4. Write a program that swap the values of two variables.
// var a = 12;
// var b = 15;
// var c;
// c = a;
// a = b;
// b = c;
// console.log(a,b);


// var a = 12;
// var b = 15;
// [a, b] = [b, a];
// console.log(a,b);


// var a = 12;  //37
// var b = 15;
// a =a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);


//5. Using console.group() to organize log into a group.
// console.group("JS");
// console.log("Java");
// console.log("Python");
// console.log("c++");
// console.groupEnd();


// console.groupCollapsed("JS");
// console.log("Java");
// console.log("C++");
// console.log("Python");
// console.groupEnd();


/***** Variables & Datatypes *****/
// 6. Declare a const object, modify its properties and log the updated object.
// const obj = {
//     name: "Shivam",
//     age: 27,
//     email: "ok@gmail.com"
// };
// obj.age = 30;
// console.log(obj);


// const arr = [1,2,3,4];
// arr = 12;


// const arr = [1,2,3,4];
// arr.pop(4);

// const obj = {
//     name: "Shivam",
//     age : 27,
//     email: "ok2gamil.com"
// };
// obj.email = "okk@gmail.com";
 

// const obj = {
//     name: "Shivam",
//     age: 27,
//     email: "ok@gmail.com"
// };
// Object.freeze(obj);
// obj.age = 25;


// 7. Convert"50" (string) into a number using 3 diff. methods.
// Number("50");
// parseInt("50");
// +"50";



// 8. Check if "javascript" contains "script" w/o using .includes()
// var str = "Javascript";
// console.log(str.includes("script"));


// let str = "Javascript";
// console.log(str.indexOf("script"));


// let str = "javascript";
// console.log(str.indexOf("script") !== -1);


// let str = "javascript";
// if(str.indexOf("script") === -1) {
//     console.log(false)
// } else{
//     console.log(true);
// };


// 9. Create an array of 5 no and log the sum using .reduce()
// 10. Explain the diff. b/w undefined, null & NaN with examples
// undefined >> var a ;
// null >> 
// NaN >> "harsh"*12 >>> Mathematical invalid calculator...