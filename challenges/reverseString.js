/*----------Reverse a String----------*/
//string.split("") func will turn our string into an array
//array.reverse() func takes our array and inverts it
//array.join("") func put the characters back together 

const reverse = (s) => s.split("").reverse().join("");
console.log(reverse("hi")); //return "ih";
/*----------Reverse a String----------*/
