// JS is a synchronous single thread language
// web api makes js, asynchronous language

// console.log(window);


/******************  setTimeout (DELAY) ********************/
// console.log('Hello 1');
// console.log('Hello 2');
// console.log('Hello 3');


// console.log('Hello 1');
// setTimeout(function () {
//     console.log('Hello 2')
// }, 3000);
// console.log('Hello 3');


// setTimeout(function(){
//     console.log('Hello 1')
// }, 2000);

// setTimeout(function() {
//     console.log('Hello 2')
// }, 4000);

/***************************************************/
// var btn = document.querySelector('button');
// var h5 = document.querySelector('h5');


// btn.addEventListener('click', function() {
//     h5.innerHTML = 'Friends';
//     h5.style.color = 'Green';
// });


// btn.addEventListener('click', function(){
//     h5.innerHTML = 'Request Sending...';
//     h5.style.color = 'Brown';
//     btn.innerHTML = 'Adding...';
//     setTimeout(function() {
//         h5.innerHTML = 'Accepted';
//         h5.style.color = 'Green';
//         btn.innerHTML = 'Remove'
//     }, 3000)
// });


// var flag = 0;
// btn.addEventListener('click', function(){
//     if(flag == 0) {
//         h5.innerHTML = 'Request Sending...';
//         h5.style.color = 'Gold';
//         btn.innerHTML = 'Adding...';

//         setTimeout(function(){
//             h5.innerHTML = 'Accepted';
//             h5.style.color = 'Red';
//             btn.innerHTML = 'Remove';
//             flag = 1
//         }, 3000)
//     } else {
//         h5.innerHTML = 'Stranger';
//         h5.style.color = 'Brown';
//         btn.innerHTML = 'Add Friends';
//         flag = 0;
//     }
// });

/******************** SetInterval (CONTROLLED LOOP)**************************/
// setInterval(function(){
//     console.log('Hello');
// }, 1000);


// var a = 0;
// setInterval(function(){
//     a++;
//     console.log('Value of a is', a)
// }, 1000);



// var i = 0;
// var print = setInterval(function(){
//     console.log('Hello', i++);
// }, 100);

// setTimeout(function(){
//     clearInterval(print)
// }, 5000);



var btn = document.querySelector('button');
var percent = document.querySelector('#percent');
var growth = document.querySelector('#growth');

var grow = 0;
btn.addEventListener('click', function(){
    var int = setInterval(function(){
        grow++
       percent.innerHTML = grow + '%'
       growth.style.width = grow + '%'
    }, 50);
    
    setTimeout(function(){
        clearInterval(int);
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5;
    }, 5000);
})
