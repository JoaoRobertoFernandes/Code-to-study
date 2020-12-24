/*----------Difference between arrays----------*/
const diff = (arr1, arr2) => {
    return arr1
        .concat(arr2)
        .filter(n => !arr1.includes(n) || !arr2.includes(n));
}
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));//return [ 4 ]