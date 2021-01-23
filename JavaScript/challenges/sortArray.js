/*---------Sort an Array----------
//Numbers in ascending order
const putInOrder = (arr) => arr.sort((a,b) => a - b);
console.log(putInOrder([1, 5, 2, 3, 4]));//return [ 1, 2, 3, 4, 5 ]

//Reverse Alphabetical order
const revertOrder = (arr) => arr.sort((a, b) => a===b ? 0 : a < b ? 1 : -1);   
console.log(revertOrder(['l', 'h', 'z', 'b', 's']));//return [ 'z', 's', 'l', 'h', 'b' ]

//Alphabetical order
const alphabeticOrder = (arr) => arr.sort((a, b) => a===b ? 0 : a > b ? 1 : -1);
console.log(alphabeticOrder(["a", "d", "c", "a", "z", "g"]));
//return [ 'a', 'a', 'c', 'd', 'g', 'z' ]
/*---------Sort an Array----------*/