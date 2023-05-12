// Part 3: Find the culprits and nail them — debugging javascript

// 1.Fix the code to get the largest of three.
//  aa = (f,s,t) => {
//  let f,s,t;
//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
//  }
//  aa(1,2,3);


// 2.Fix the code to Sum of the digits present in the number
// let n = "123";
// console.log(add(n));
// function add(n)
// {
// let sum = 0;
// for(var i=0;i<n.length;i++){
//  sum+= parseInt(n[i])
//  }
//  return sum;
// }


// 3.Fix the code to Sum of all numbers using IIFE function
// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i < arr.length; i++){
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();


// 4.Fix the code to gen Title caps
// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[i].toUpperCase() + arr[i].substr(1));
//  }
// }
// ano();


//5.Fix the code to return the Prime numbers
// const newArray = [1, 3, 2, 5, 10];
// const myPrime = newArray.filter(num => {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// });
// console.log(myPrime);


// 6.Fix the code to sum the number in that array
// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const sum = num.reduce((a, b) => a + b, 0);
// console.log(sum);


// 7.Fix the code to rotate an array by k times and return rotated array using IIFE function
// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//   arr = arr.slice(k + 1, arr.length);
//   var out = [];
//   var count = out.length;
//   for (var i = 0; i < arr.length; i++) {
//     out[count] = arr[i - k - 1];
//     count += 1;
//   }
//   console.log(out);
// })();


// 8.print all odd numbers in an array using IIFE function
// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       console.log(arr[i]);
//     }
//   }
// })();


// 9.Fix the code to reverse.
// (function(str) {
//     var str1 = str.split("").reverse().join("");
//     console.log(str1);
//   })("abcd");
  

// 10.Fix the code to remove duplicates.
//   var res = function(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//       }
//     }
//     console.log(newArr);
//   };
//   res(["guvi", "geek", "guvi", "duplicate", "geeK"]);


// 11.Fix the code to give the below output:
