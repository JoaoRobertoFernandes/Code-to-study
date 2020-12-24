/*----------Sum primes----------
//adding the prime numbers
const sumPri = (num) => {
    var res = 0;
    for (let i = 1; i <= num; i++) {
        if(pri(i)){
            res += i;
        }
    }
    return res;
}

//check if a number is prime
const pri = (val) => {
    for(let i = 2; i < val; i++) {
        if(val % i === 0) {
            return false;
        }
    }
    return val !== 1 && val !== 0;
}

console.log(sumPri(977));//return 73156
/*----------Sum primes----------*/