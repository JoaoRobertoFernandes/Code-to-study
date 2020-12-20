/*----------Split array----------
const check = (arr, n) => {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, n));
    }
    return newArr;
}

console.log(check(["a", "b", "c", "d"], 2));//return [ [ 'a', 'b' ], [ 'c', 'd' ] ]
/*----------Split array----------*/

