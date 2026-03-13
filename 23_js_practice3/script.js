/************* Array (5 Questions) ****************/
// 16.Remove duplicate values from an array.
// var arr = [1,1,1,2,2,2,2,2,3,5,4,8,8,8,8,6,6,6];
// var arr2 = [...new Set(arr)];


// 17.Find the second largest number in an array.
// var arr = [1,55,25,63,5,85,90,4,2,8,0,45,1,2];
// var arr2 = [...new Set(arr)];
// var ans = arr2.sort(function(a, b) {
//     return b-a;
// });
// console.log(ans[1]);


// var arr = [1,55,65,25,36,78,12,32];
// console.log([...new Set(arr)].sort(function(a,b ) {
//     return b - a;
// })[1]);


// 18.Sort an array in descending order.
// var arr = [1,2,3,4,5];
// var ans = arr.sort(function(a,b) {
//     return b-a;
// });
// console.log(ans);


// var arr = [1,2,3,4,5,6];
// var ans = arr.sort((a,b) => b-a);


// 19.Reverse an array without using .reverse()
// var arr = [1,2,3,4,5,52,85,6,89];
// var arr2 = [];
// for(var i = arr.length-1; i>=0; i--) {
//     arr2.push(arr[i])
// };


// // 20.Find the most frequent element in an array()
// let arr = [3,5,3,2,1,8,3,9,4,2,1,3];
// let obj = {};

// arr.forEach(function(val){
//     obj[val] === undefined ? obj[val] = 1 : obj[val]++;
// });