/*----------Using Every---------*/
const isPos = (arr) => arr.every(a => a > 0);
console.log(isPos([1, 2, 3, -4, 5]));//return false
console.log(isPos([1, 2, 3, 4, 5]));//return true
/*----------Using Every---------*/