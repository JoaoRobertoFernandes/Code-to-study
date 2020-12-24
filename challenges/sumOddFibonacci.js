/*----------Sum all odd Fibonacci numbers----------
const sumFib = (val) => {
    var prev = 0; //previous number
    var curr = 1; //current number
    var res = 0;
    while(curr <= val) { 
        if(curr & 2 !== 0){
            res += curr;
        }

        curr += prev;
        prev = curr - prev;
    }
    return res;
}
console.log(sumFib(4));//return 5
/*----------Sum all odd Fibonacci numbers----------*/