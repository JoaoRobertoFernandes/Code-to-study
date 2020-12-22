/*----------Positive int Square----------
const check = (arr) => {
    return arr 
        .filter(num => num > 0 && num%parseInt(num) === 0)
        .map(num => num = Math.pow(num, 2));
}
console.log(check([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));//return [ 16, 1764, 36 ]
/*----------Positive int Square----------*/