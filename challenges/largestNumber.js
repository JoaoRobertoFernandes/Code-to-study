/*----------Largest Number----------*/
const larg = (arr) => arr.map(Function.apply.bind(Math.max, null));
console.log(larg([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
/*----------Largest Number----------*/