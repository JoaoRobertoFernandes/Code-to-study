
/*----------LCM----------*/
const commons = (arr) => {
    /*-----Range-----*/
    var range = [];
    for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
        range.push(i);
    }
    /*-----Range-----*/

    /*-----Euclidean Algorithm-----*/
    const gcd = (x, y) => {
        if (y === 0) {
            return x;
        } else {
            return gcd(y, x % y);
        }
    }
    /*-----Euclidean Algorithm-----*/

    /*-----Lcm-----*/
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
      var GCD = gcd(lcm, range[i]);
      lcm = (lcm * range[i]) / GCD;
    }
    return lcm;
    /*-----Lcm-----*/
}
console.log(commons([1, 5]))// return 60 
/*----------LCM----------*/
