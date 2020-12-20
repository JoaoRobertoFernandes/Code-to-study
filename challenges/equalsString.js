/*----------Equal String----------
const check = (arr) => {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0){
            return false;
        }
    }
    return true;
}
console.log(check(["hello", "Hello"]));//return false
console.log(check(["hello", "hey"]));//return true
/*----------Equal String----------*/

/*----------Other Way----------*/
const check = (arr) => arr[1].toLowerCase().split("").every((letter) => arr[0].toLowerCase().indexOf(letter) != -1);

console.log(check(["hello", "Hello"]));//return true
console.log(check(["hello", "hey"]));//return false
/*----------Other Way----------*/


