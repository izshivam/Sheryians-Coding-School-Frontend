/************ Callback & Closures ************/
// Callback fUunction :
// function abcd(cb){
//     cb();
// };
// abcd(function(){});


// HOFS :
// function abcd(cb){
    
// };
// abcd(function(){});


// function abcd() {
//     return function(){};
// }
// abcd(function(){});


// Closures :
// function abcd() {
//     let a = a;
//     return function(){
//         console.log(a);
//     };
// }
// abcd()();


/*************************************/
// 1. Create a function that takes another function as an argument and calls it after 3 second(hofs+cb).
// function abcd(fn){
//     setTimeout(fn, 3000);
// };
// abcd(function(){
//     console.log("Hello");
// });


// 2.Implement your own version of  .map() as a higher order function.
/***** MAP *****/
// var arr = [1,2,3,4,5];
// var arr2 = arr.map(function (val) {
//     return val+2;
// });


// var arr = [1,2,3,4,5];
// function hap(a, fn) {
//     var newarr = [];
//     for(var i = 0; i<a.length; i++) {
//         newarr.push(fn (a[i]));
//     }
//     return newarr;
// };

// var ans = hap(arr, function (value){
//     return value + 2;
// });


// function hap(arr, fn) {
//     var arr2 = [];
//     for(var i = 0; i<arr.length; i++){
//         arr2.push(fn(arr[i]));
//     }
//     return arr2;
// };

// var ans = hap([1,2,3,4,5], function (val){
//     return val+2;
// });


// 3.Write a function that uses closures to create a counter.
// function abcd() {
//     return function () {
//         let def = 0;
//         console.log(def);
//     };
// };


// function counter(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);     
//     }
// };
// var ans = counter();
// ans();
// ans();
// ans();
// ans();
// ans();


// 4.Implement a function that limits how many times another function can be called(closures + hofs).
// function abcd(fn, limit) {
//     let totalCalled = 0;
//     return function(){
//       if(totalCalled < limit) {
//         totalCalled++;
//         fn();
//       }
//     };
// };

// let ans = abcd(function () {
//     console.log("Hello");
// }, 3);

// ans();
// ans();
// ans();
// ans();