/*----------Pair element----------
const checkPair = (str) => {
    let pairs = {
        A: "T",
        T: "A",
        G: "C",
        C:"G"
    }

    let arr = str.split("");
    return arr.map(c => [c, pairs[c]]);
}
console.log(checkPair("GCG"));//return  [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
/*----------Pair element----------*/