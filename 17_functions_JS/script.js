/**  What is function = Block of code which can be reuse and run at any point of time.
 function abcd() {} **/

// function greet() {
//     console.log('Hello Function');
// }
// greet();
// greet();
// greet();
// greet();
// greet();

/**  Why function = Jab v apko code turant nhi chalana and sath hi sath apko us code ko reuse v krna hai aap fn banate ho. **/
// function greet() {
//     console.log('Hello Function')
// }
// greet();

/**  greet() => it mean fn ko call krna. */
/** Why we need fn => To reuse some code which is very long to re-write.
 WET => writing everything twice. 
 DRY => Do not repeat yourself. **/

/** How to create a fn **/
// function abcd() {};


/** How to call fn **/
// function greet() {
//     console.log('Function')
// };
// greet();


/** How to pass a parameter to a function 
    How to pass a argument to a function **/
// function greet(ok) {
//     console.log(ok)
// };
// greet("one");
// greet("two");
// greet("three");
// greet("four");
// greet("five");


// function abcd(a,b,c,d) {
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4);


// function abcd(a,b,c,d) {
//     console.log(a+b+c+d);
// }
// abcd(1,2,3,4);


// function abcd(a,b){
//      console.log(a,b);
// }
// abcd(1,2,3);


// function abcd(a,b,c,d) {
//     console.log(a,b,c);
// }
// abcd(1,2,3);


// function abcd(n) {
//     console.log(n);
// }
// abcd('Shivam');


// function abcd(a,b,c,d) {
//     console.log(a,b,c,d);
// }
// abcd(1,2,3);


//** Types of function **//
/** fn statement **/
// function abcd() {};


/** fn expression **/
// var abcd = function(){};


/** fn anonymous **/
// function() {};
// var arr = [1,2,3,4,5];
// arr.forEach(function(){});


/** fat arrow fn **/
// ()=>{};


/** fat arrow fn with one parameter **/
// let abcd = (a) => {};
// abcd(12);

// let ans = a => {};
// ans(12);

/** fat arrow fn with one implicit return **/
// function abcd(){
//     return "Hello";
// }
// abcd();


// function abcd() {
//     return "Shivam";
// }

// var ans = abcd();

// function abcd() {
//     return 15;
// }

// var ans = abcd();


/** Implicit Return **/
// var abcd = ()=>12;
// var ans = abcd();


/** Rest Parameter.... **/
// function abcd(a,b,c,...rest) {
//     console.log(a,b,c,rest);
// };

// abcd(1,2,3,4,5,6,7,8);


/** Hoisting **/
// console.log(a);
// var a = 12;
