// JavaScript --
//       > Frontend
//       > Backend
//       > Libraries
//       > Desktop Apps
//       > Mobile Apps 


// DOM -- Document Object Model
//      > Frontend's Javascript 


// 4 Pillars Of Dom :--
//          - Selection of element
//          - Changing HTML
//          - Changing CSS
//          - Event Listener


/************************/
// var h = document.querySelector('h1');
// console.log(h);


// var h = document.querySelector('h1');
// h.innerHTML = 'Document Object Model';
// console.log(h);


// document.querySelector('h1').innerHTML = "Document Object Model";


// var h = document.querySelector('h1').innerHTML = "Document Object Model";
// console.log(h);


// var h = document.querySelector('h1');
// h.style.color = 'red';
// h.style.backgroundColor = 'Yellow';


// var h = document.querySelector('h1');
// h.addEventListener('click', function(){
//     console.log('Hello DOM');
// });


// var h = document.querySelector('h1');
// h.addEventListener('click', function(){
//     h.innerHTML = "Document Object Model";
//     h.style.backgroundColor = "red";
//     h.style.color = "yellow";
// });


/*******************************/
// var h1 = document.querySelector('h1');
// h1.innerHTML = "Hello";
// h1.style.color = "yellow";
// h1.style.fontSize = "100px";

// h1.addEventListener('click', function(){
//     console.log("JavaScript"); 
// });



// var h1 = document.querySelector('h1');
// h1.addEventListener('click', function(){
//     h1.innerHTML = "Hello";
//     h1.style.color = "yellow";
//     h1.style.fontSize = "100px";
// });

/***************************************/
// var h1 = document.querySelector('#box')
// console.log(h1);

// var box = document.getElementById('box');
// console.log(box);

// var box = document.getElementById('box');
// box.innerHTML = 'Changed';
/*************************************/

// var h1 = document.querySelector('h1');
// h1.innerHTML = 'Changed';

// var h1 = document.querySelectorAll('h1');
// console.log(h1);
// console.log(h1[0]);
// console.log(h1[2]);
// console.log(h1[5]);
// h1[0].innerHTML = 'Channel';
/********************************/

// var box = document.querySelector('#box');
// box.innerHTML = 'Changed';
// box.innerHTML = '<h1>Hello</h1>';
// box.textContent = 'Changed';
// box.textContent = '<h1>Hello</h1>';
// box.innerText = 'Changed';
// box.innerText = '<h1>Hello</h1>';
/***************************************/

// var button = document.querySelector('button');
// var box = document.querySelector('#box');

// button.addEventListener('click', function(){
//     box.style.backgroundColor = 'red'
// });

            /***** OR *****/

// var button = document.querySelector('button');
// var box = document.querySelector('#box');

// function changeBox(){
//    console.log('function runnig...');
//    box.innerHTML = 'Changed';
//    box.style.backgroundColor = 'pink';
// };

// button.addEventListener('click', changeBox);



// var button = document.querySelector('button');
// var box = document.querySelector('#box');

// function changeBox(){
//    console.log('function runnig...');
//    box.style.backgroundColor = 'orange';
// };

// button.addEventListener('click', changeBox);


/*********************************************/
// var btn = document.querySelector('button');
// var h5 = document.querySelector('h5');

// btn.addEventListener('click', function(){
//     h5.innerHTML = 'Friends';
//     h5.style.color = 'Green';
//     btn.innerHTML = 'Remove Friend';
//     console.log('Clicked');
    
// });


var btn = document.querySelector('button');
var h5 = document.querySelector('h5');
var check = 0;
btn.addEventListener('click', function(){
    if (check == 0) {
        h5.innerHTML = 'Friend';
        h5.style.color = 'Red';
        btn.innerHTML = 'Remove Friend';
        console.log('Friendship Done');
        check = 1;
    } else {
        h5.innerHTML = 'Stranger';
        h5.style.color = 'Green';
        btn.innerHTML = 'Add Friend'
        console.log('No Friendship')
        check = 0;
    }
})