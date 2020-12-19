/*----------Slice---------
const put = (a, b, n) => {
    let newArr = b.slice();
    newArr.splice(n, 0, ...a);
    return newArr;
}
console.log(put([1, 2, 3], [4, 5], 1))//return [ 4, 1, 2, 3, 5 ]
/*----------Slice---------*/