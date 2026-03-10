/********** 
 Data Types 
    - Primitive 
        Number (10, 10.5, 10.005)
        String ("Shivam", 'Shivam')
        Boolean (True, False)
        Undefined
        Null
        Symbol
        BigInt - for large no. 2^53-1

    - Reference 
        -Array
        -Object
        -Function
**********/

// var a = 10;
// console.log(a);

// var b = 'Shivam';
// console.log(b);

// var c = true;
// console.log(c);

// var age = prompt('Enter your age');
// console.log(age);

// var a = 'Shivam'
// var b = 'Choudhary'

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// var a = 'Shivam';
// var b = 15;
// console.log(a+b);

// var a = '10';
// var b = '20';
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

/**********

+ : add, concatination
- : sub
* : mul
/ : div
% : Remainder

**********/

// var num1 = prompt('Enter num1');
// var num2 = prompt('Enter num2');
// console.log(num1+num2);


// var num1 = prompt('Enter num1');
// var realnum1 = Number(num1);
// console.log(realnum1);
// console.log(realnum1+20);


// var num1 = prompt('Enter num1');
// var num2 = prompt('Enter num2');

// var realnum1 = Number(num1);
// var realnum2 = Number(num2);

// console.log(realnum1+realnum2);


// var num1 = Number(prompt('Enter num1'));
// var num2 = Number(prompt('Enter num2'));
// console.log(num1 + num2);


// var num1 = String(prompt('Enter num1'));
// var num2 = String(prompt('Enter num2'));
// console.log(num1 + num2);


// var a;
// console.log(a);


// var a = null;
// console.log(a);


// var a = 10000000000000000000000;
// console.log(a);
// var b = 1000000000000000000000000n;
// console.log(b);     
// var c = 1000000000000000000000n;
// var d = 10;
// console.log(c+d);

// var e = 10;
// var f = '20';
// console.log(e+f);


/**************** Hoisting **************************/
// var a = 10;
// console.log(a );

// console.log(a);
// var a = 10; 

// var a;
// console.log(a);

// a = 10;
// console.log(a);


/*************** Conditional**********/
// if (10>5) {
//     console.log('yes');
// }

// if (5>10) {
//     console.log('yes');
// }


// var a = 10;
// var b = 20;
// if (a>b) {
//     console.log('Hello');
// }else{
//     console.log('Not Hello');   
// }


// var a = 10;
// var b = 10;
// if (a>b) {
//     console.log('Yes');
// }else {
//     console.log('No');
// }


// var a = 10;
// var b = 10;

// if (a == b) {
//     console.log('Yes');
// } else{
//     console.log('No');
// }


// var a = 10;
// var b = 100;

// if (a == b) {
//     console.log('Yes');
// } else{
//     console.log('No');
// }


/** Ask a user his age and check if he is adult or not **/
// var age = Number(prompt('Enter Your Age'));

// if (age>18) {
//     console.log('You can vote');   
// }else {
//     console.log('Cant vote')
// };


// var age = Number(prompt('Enter your age'));
// if (age>=18) {
//     console.log('You can vote');
// }else {
//     console.log('You cant vote');   
// };


// var marks = Number(prompt('Enter  your marks'));
// if (marks>90) {
//     console.log('You got A+');
// } else if (marks>80) {
//     console.log('You got B+');
// } else if (marks>60) {
//     console.log('You got C+');
// }
// else {
//     console.log('You failed');
// }


/*********** Binary Operators**********/
// true - 1
// false - 0

/* && * And Operator */
// 0 0 = 0
// 0 1 = 0
// 1 0 = 0
// 1 1 = 1


/** || (+) Or Operator **/
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 1


// var age = 30;
// if (age>18 && age<60) {
//     console.log('You can vote')
// }else {
//     console.log('You cant vote');
// }


// var age = 15;
// if (age>18 && age<60) {
//     console.log('You can vote')
// }else {
//     console.log('You cant vote');
// }


// var age = 70;
// if (age>18 && age<60) {
//     console.log('You can vote')
// }else {
//     console.log('You cant vote');
// }



// var age = 30;
// if (age>18 || age<60) {
//     console.log('You can vote')
// }else {
//     console.log('You cant vote');
// }


// var age = 70;
// if (age>18 || age<60) {
//     console.log('You can vote')
// }else {
//     console.log('You cant vote');
// }


// var age = 10;
// if (age>18|| age<60) {
//     console.log('You can vote')
// }else {
//     console.log('You cant vote');
// }

/**********************/
// var a = 10;
// console.log(a++);
// console.log(a);

// var b = 10;
// console.log(++b);
// console.log(b);


// var a = 10;
// var b = 10;
// if (a == b ) {
//     console.log('True');
// } else {
//     console.log('False');
// };


// var a = 10;
// var b = '10';
// if (a == b) {
//     console.log('True');
// } else {
//     console.log('False');
// };


// var a = 10;
// var b = '10';
// if (a === b) {
//     console.log('True');
// } else{
//     console.log('False');
// }


// var a = 10;
// var b = '10';
// if (a != b) {
//     console.log('True');
// }else {
//     console.log('False');
// }


/**
== : Compare values
=== : Compare values & Data types
=   : Use for value assign (var a = 10;)
**/


/** Ask a user his bijli ka units and if it greater than 100 units than calculate on the basis of 10rs per unit. if more than 50 units than calculate on the basis of 8rs per unit and if less calculate on the basis of 5rs per unit **/
// var unit = Number(prompt('Enter units'));
// var bill;
// if (unit>=100) {
//     bill = unit * 10;
// } else if (unit>=50) {
//     bill = unit * 8;
// } else {
//     bill = unit * 5;
// }
// console.log(bill);

/****** Ternary Operatos ******/
// var a = 10;
// console.log(a>20?'Hello':'Not Hello');

// var a = 30;
// console.log(a>20?'Hello':'Not Hello');


// var a = 10;
// var b = 20;
// a>b?console.log('Hello JS'):console.log("Not Hello");


/****** While Loop ******/
/**
var a = 10;
while (a<10) {
    console.log('Hello');
}
These both are infinite loop, so dont run this code....
while(10>5) {
   console.log('Ok')
}

var a = 0;
while(a<10) {
  console.log('Yes')
}
**/


// var a = 0;
// while (a<10) {
//     console.log('JS');
//     a++;
// }


// var b = 0;
// while (b<10) {
//     console.log(b);
//     b++;
// }


// var a = 1;
// while (a<=100) {
//     console.log(a);
//     a++;
// }


// var a = 1;
// while (a<=100) {
//     console.log('JS', a);
//     a++;
// }

/******* Do While ******/

// var a = 1;
// do{
//     console.log('Hello');
//     a++;
// } while (a<=10);


// var a = 1;
// do{
//     console.log('Hello', a);
//     a++;
// } while (a<=10);

/****** For Loop ******/
// var a = 1;
// while(a<=10) {
//     console.log('Hello');
//     a++;
// }


// for(var a = 0; a<10; a++) {
//     console.log('Hello', a);   
// }
    

// for(var a = 10; a>=1; a--) {
//     console.log('Hello', a);
// }