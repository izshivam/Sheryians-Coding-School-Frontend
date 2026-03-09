/** Rest Parameters **/
// function abcd(a,b,c,...rest) {
//     console.log(a,b,c,rest);
// };
// abcd(1,2,3,4,5)



/** Hoisting **/
// console.log(a);
// var a = 12;



// var a;
// console.log(a);
// var a = 12;


// abcd();
// function abcd() {
//     console.log("Hello");
// };


/** IIFE **/
// Immediately Invoked Function Expressio
// (function abcd() {
//     console.log('Hello JS')
// }) ();


// (function abcd() {
//     var a = 15;
//     console.log(a);
// }) ();


// var ans = (function abcd() {
//     var a = 15;
//     return a;
// }) ();



// var ans = (function abcd() {
//     var a = 20;

//     return {
//         set: function (val) {
//             a =val;
//         },
//         get: function () {
//             console.log(a);
//         },
//     };
// })();

// ans.set("32");
// ans.get();


// var ans= (function sheryLibrary() {
//     return {
//         imageEffect: function () {
//             console.log('image effect');
//         },
//         mouseFollower: function () {
//             console.log('mouse follower');
//         },
//     };
// })();

// ans.imageEffect();


/** HOFs **/
// Higher order functions
// function abcd() {
//     return function (){
//         console.log('Heloooo')
//     }
// }
// abcd()();



// function abcd(val) {
//     val();
// }
// abcd(function (){
//     console.log('Heloooo');
// });



/** CallBack Function **/
// function abcd(val) {

// }
// abcd(function() {});



/** FirstClass Function **/
// var ans = function abcd() {};


/** Pure Function **/
// function add(a,b) {
//     return a + b;
// }
// console.log(add(2,3));


/** Impure Function **/
// let total = 0;
// function addTotal(a) {
//     total += a;
// }
// addTotal(5);
// console.log(total);



/** Global scope **/
// var a = 12;
// function abcd() {
//     console.log(a);
// };



/** Local scope **/
// function abcd() {
//     var a = 12;
// }



/** Closure **/
function abcd(){
    var a = 12;
    return function(){
         console.log(a);    
    }
}
var ans = abcd();
ans();