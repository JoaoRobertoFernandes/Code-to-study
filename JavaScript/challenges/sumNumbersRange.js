/*----------Sum all numbers in range----------
const sumAll = (arr) => {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    var res = 0;
    for(let i = min; i <= max; i++) {
        res += i;1
    }
    return res;
}
console.log(sumAll([1, 4]));//return 10
/*----------Sum all numbers in range----------*/