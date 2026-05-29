// var num = Math.random();
// console.log(num);


// var num = Math.random()*10;
// console.log(num);


// var num = Math.random()*100;
// var num2 = Math.floor(num);
// console.log(num2);


// var num = Math.floor(Math.random()*100);
// console.log(num);

/*************************************************/
// var btn = document.querySelector('button');
// var box = document.querySelector('#box');


// btn.addEventListener('click', function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);
//     console.log(c1, c2, c3);
// });


// btn.addEventListener('click', function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);
//     // console.log(c1, c2, c3);
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    
// });


/**************************************************/
// var arr = ['Shivam', 'Harsh', 'Sarthak', 'Ankur'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);
// console.log(arr.length-1); 

// var num = Math.floor(Math.random()*arr.length);
// console.log(arr[num]);
/*****************************************************/

// var arr = ['CKS', 'MI', 'RCB', 'KKR', 'SRH', 'DC', 'PBKS', 'RR', 'LSG', 'GT'];
// var num = Math.floor(Math.random()*arr.length);
// console.log(arr[num]);
/**********************************************************/

// var arr = ['CKS', 'MI', 'RCB', 'KKR', 'SRH', 'DC', 'PBKS', 'RR', 'LSG', 'GT'];

// var btn = document.querySelector('button');
// var h1 = document.querySelector('h1')

// btn.addEventListener('click', function(){
//     var num = Math.floor(Math.random()*arr.length);
//     var winner = arr[num];
//     h1.innerHTML = winner
// });


/************************************************************/
var arr = [
    {
        team : 'csk',
        primary : 'yellow',
        secondary : 'green'
    },
    {
        team : 'rcb',
        primary : 'red',
        secondary : 'black'
    },
    {
        team : 'mi',
        primary : 'blue',
        secondary : 'gold'
    },
    {
        team : 'srh',
        primary : 'orange',
        secondary : 'black'
    }
];

// console.log(arr);
// console.log(arr[0].team);
// console.log(arr[2].team);
// console.log(arr[2].primary);


var btn = document.querySelector('button');
var h1 = document.querySelector('h1');

btn.addEventListener('click', function(){
    var num = Math.floor(Math.random()*arr.length);
    var winner = arr[num];
    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.primary;
    h1.style.color = winner.secondary;                                          
});