// 1.getAttributes & setAttributes 
// 2.creating an element
// 3.mouse events, keyboard events, scroll events, double events, wheel events, etc.

// var h1 = document.querySelector('h1');
// h1.innerHTML = 'how it is going';


// 1.getAttributes -> for getting an attributes  
//   setAttributes -> for setting an attributes

// var img = document.querySelector('img');

// var h1 = document.querySelector('h1');
// var att = h1.getAttribute('id');
// console.log(att);

// var h1 = document.querySelector('h1');
// var att = h1.getAttribute('class');
// console.log(att);

// var h1 = document.querySelector('h1');
// var sett = h1.setAttribute('id', 'bollywood');
// console.log(sett);

// var h1 = document.querySelector('h1');
// h1.setAttribute('class', 'hollywood')

// var img = document.querySelector('img');
// console.log(img);
// console.log(img.getAttribute('src'));
// console.log(img.getAttribute('alt'));
// console.log(img.getAttribute('id'));

// var img = document.querySelector('img');
// img.setAttribute('src', 'https://images.unsplash.com/photo-1782174177294-872d77096f77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8');

/*******************************************************/
// var img1 = document.querySelector('#img1')
// var img2 = document.querySelector('#img2')
// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     var img1SRC = img1.getAttribute('src')
//     var img2SRC = img2.getAttribute('src')

//     img1.setAttribute('src', img2SRC);
//     img2.setAttribute('src', img1SRC);
    
// });


/**************************************************************/
// document.querySelector('svg path').setAttribute('stroke', 'red');



/********** Creating An Element **********/
// var h1 = document.createElement('h1');
// console.log(h1);

// var div = document.createElement('div');
// console.log(div);

// var p = document.createElement('p');
// console.log(p);

// var img = document.createElement('img')
// console.log(img);


// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello JS'; 
// console.log(h1);

// var body = document.querySelector('body');
// body.appendChild(h1);


// var img = document.createElement('img');
// img.setAttribute('src', 'https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8z')
// img.style.height = '200px';

// document.body.appendChild(img);



// var btn = document.querySelector('button');
// var body = document.querySelector('body');

// btn.addEventListener('click', function(){

//    var x = Math.random()*100
//    var y = Math.random()*100
//    var rot = Math.random()*360

//    var img = document.createElement('img');
//    img.setAttribute('src', 'https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8z');

// //    img.setAttribute('class', 'image');
//    img.style.height = '100px';
//    img.style.position = 'absolute';
//    img.style.left = x+'%';
//    img.style.top = y+'%';
//    img.style.rotate = rot+'deg'
//    body.appendChild(img);
   /* https://www.remove.bg/ */

// })


var box = document.querySelector('#box');

// box.addEventListener('click', function(){
//    console.log('Event Done')
// });


// box.addEventListener('dblclick', function(){
//    console.log('Working');
// })


// box.addEventListener('mouseenter', function(){
//    document.body.style.backgroundColor = 'red';
// });


// box.addEventListener('mouseleave', function(){
//    document.body.style.backgroundColor = '#111';
// });

// box.addEventListener('mousemove', function(){
//    console.log('MoveOn');
// })


// var grp = 0;
// box.addEventListener('mousemove', function(){
//    grp++;
//    console.log('MoveOn', grp);
// })


// var grp = 0;
// box.addEventListener('mousemove', function(dets){
//    grp++;
//    console.log(dets);
//    console.log(dets.y);
//    console.log(dets.x);
// })



/** Click, Mouseleave, Mousecenter, dblclick, mousemove, keyup, keydown, keypress, scroll, wheel **/


box.addEventListener('mousemove', function(dets){
   console.log('MouseMoving on box', dets)
});

document.addEventListener('keyup', function(dets){
   console.log('Key Up', dets)
});

document.addEventListener('keydown', function(dets){
   console.log('Key Down', dets)
});

document.addEventListener('keypress', function(dets){
   console.log('Key Press', dets)
});

document.addEventListener('wheel', function(dets){
   console.log('Wheel', dets)
});

document.addEventListener('scrool', function(dets){
   console.log('Scrool', dets)
});