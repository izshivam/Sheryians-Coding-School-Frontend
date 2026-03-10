/** Slice = EXtract a section of a string w/o modifying the original string. **/
//  let str = "apple";
//  let ans = str.slice(0, 4);  
//  console.log(ans);
     

/** Template Literals /Backticks/ Template string =Allows embedding expressions within a string using backticks(``). **/
// let str = `hey my age is ${20+7}`;
// console.log(str); 

/** Split = Splits a sting into an array based on a separator. **/
// let str = "How are you";
// let ans = str.split('o');
// console.log(ans);


// let str = "How are you";
// let ans = str.split(" ");
// console.log(ans);


/** Replace = Replaces a specified substring with another. **/
// let str = "What is your name";
// let ans = str.replace('i', 'w');
// console.log(ans);


// let str = "Where are you from";
// let ans = str.replaceAll('e', 'w');
// console.log(ans);


/** Includes = Check if a substring exists withing a string. **/
// let str = "Hello, world";
// let ans = str.includes(',');
// console.log(ans);


// let str = "Hello Javascript";
// let ans = str.includes('5');
// console.log(ans);


/*************************/
// let a = 10;
// if (a>13) {
//     console.log('True');
// } else if (a>11) {
//     console.log('Hello');
// } else {
//     console.log('No');
// };


/** Ternary Operator = Shorter way to write if-else. **/
// condition ? () : ()
// 12>11 ? console.log("Yes") : console.log('No');


/** Switch = Alternative to multiple if-elsa. **/
/*
switch(value) {
    case value:
       // code
    break;
    case value:
    // code
    break;
    default:
    // code    
} 
*/

// switch(3) {
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     case 4:
//         console.log('four');
//     break;
//     default:
//         console.log('default');     
// }



// switch (3) {
//     case 1:
//         console.log('one');
//         break;
//         case 2:
//             console.log('two');
//             break;
//         case 3:
//             console.log('three');
//         case 4:
//             console.log('four');
//             break;        
//     default:
//         console.log('default'); 
// }


// switch('harsh') {
//     case "harshit":
//         console.log('you are harshit');
//         break;
//     case "Shivam":
//         console.log('You are shivam');
//         break;
//     case "harsh" :
//         console.log('You are harsh');
//         break;
//     default:
//         console.log('You are not harsh');
               
// }


/******** Loops ********/
// for (let i = 12; i < 32; i++) {
//     console.log('Loop');
// };


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 1; i<arr.length; i++) {
//     console.log('Hello');
// }


// let i = 1;
// while (i<12) {
//     console.log(i);
//     i++;
// };


// let i = 12;
// do {
//     console.log(i);
//     i++;
// }
// while(i<20);

/********* Break & Continue ***********/
// for (let i = 12; i<23; i++) {
//     console.log(i);
//     if(i === 16)
//     break;   
// }


// for (let i = 1; i<23; i++) {
//     if(i === 16) break;
//     console.log(i);  
// }


// for (let i = 12; i<22; i++) {
//     if(i === 16) continue;
//     console.log(i);
// }