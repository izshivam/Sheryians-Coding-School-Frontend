// 1. Create a function that takes a callback and exicutes it after every 'n' seconds indefinitely.
// function abcd(fn, time) {
//     setInterval(fn, time);
// } 
// abcd(function (){
//     console.log("Hello");  
// }, 2000);


// 2. Implement a function that returns a function with a preset greeting(Closure).
// function abcd(greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// var ans = abcd("Hello");
// ans("Shivam");
// ans("Choudhary");

//              Or

// function greetSetup(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`); 
//     }
// };

// var indianGreeter = greetSetup("Namste");
// indianGreeter("Shivam");

// var spanishGreeter = greetSetup("Hola!")
// spanishGreeter("Ilia");


// 3. Implement a function that takes a callback and only executes it once (hofs + callback).
// function abcd(cb) {
//     let executed = false;
//     return function() {
//         if(!executed) {
//             executed = true;
//             cb();
//         }
//     }
// }

// var ans = abcd(function(){
//     console.log("some code which should executed"); 
// });

// ans();
// ans();
// ans();


// 4. Implement a function that throttles another function (hofs + closures).
function abcd(fn, delay) {
    let lastCall = 0;
    return function(){
        let current = Date.now();
        if(current - lastCall >= delay) {
            lastCall = current;
            fn();
        }
    };
};
var ans = abcd(function(){
    console.log("will run in 2 sec"); 
}, 2000);

ans();
ans();
ans();
ans();
ans();