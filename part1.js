// Part 1: Find the culprits and nail them — debugging javascript


// 1.Find the culprit
// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( "I'm JavaScript!");
//  </script>
//  Whats the error in this ?
// </body>
// </html>

// 2.Find the culprit and invoke the alert
//alert("I'm invoked!");

// 3.

// 4.Fix the below to alert Guvi geek
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+" "+lname;
// alert( admin ); // "Guvi geek"

// 5.Fix the below to alert hell0 Guvi geek
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( `hello ${name}` );

// 6.Fix the below to alert sum of two numbers
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(+a + +b);

// 7.Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
// bacuse at first it compares string 2 with 1
// var a = 2 > 12;
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }


// 8.How to get the success in console.
// let b = (prompt("Enter a number?"));
// a=parseInt(b)
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// 9.How to get the correct score in console.
// let value =parseInt( prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }


// 10.Fix the code to welcome the boss
// let message;
// if (null || 2 || undefined )
// {
//    message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);
  
// 11.Fix the code to welcome the boss
// let message;
// let lock =null;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
  
// 12.Fix the code to welcome the boss
// let message;
// let lock =null;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);


// 13.Whats the msg printed and why? Guess you answer before running it.
// var lemein = '0';
// var lemeout = 0;
// var msg = '';
// if (lemein) {
//  msg += 'hi';
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg); 