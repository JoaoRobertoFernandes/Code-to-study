/*----------...new Set()----------
const ns = (...arg) => [...new Set(arg.flat())];
console.log(ns([1, 3, 2], [5, 2, 1, 4], [2, 1]));//return [ 1, 3, 2, 5, 4 ]
//...new Set() removes repeat values
//flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
/*----------...new Set()----------*/