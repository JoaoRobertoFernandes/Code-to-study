/*----------Seek and Destroy----------
const seekDestroy = (arr, ...val) => {
    return arr  
        .filter(n => !val.includes(n));
}
console.log(seekDestroy([1, 2, 3, 1, 2, 3], 2, 3));//return [ 1, 1 ]
/*----------Seek and Destroy----------*/