/*----------Truncate String----------
const trunc = (str, n) => {
    if (str.length > n){
        return str.slice(0, n) + "...";
    }else {
        return str;
    }   
}
console.log(trunc("A-tisket a-tasket A green and yellow basket", 8));
/*----------Truncate String----------*/
