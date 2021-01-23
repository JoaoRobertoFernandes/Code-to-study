/*------------Keywords------------*/


/*-------var-------
//var keyword can be replaced without an error.
var val1 = 2;
var val1 = 1;
console.log(val1);//Result = 1

//var keyword is declared globally
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(i);//Result = 3
-------var-------*/


/*-------let-------
//let keyword can't be replaced
let val1 = 2;
let val1 = 1;
console.log(val1);//Result = error

//let keyword declaration is valid only for the scope in which it is found
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());//Result = 2
console.log(i);//Result = i is not defined
-------let-------*/


/*-------const-------
//const keyword can't be reassigned
const obj = 1;
obj = 2; //Result = error
-------const-------*/


/*-------Obs-------*/
// x = 3.14; Result = error because x is not declared
/*-------Obs-------*/
