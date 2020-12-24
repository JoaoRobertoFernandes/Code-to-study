/*----------Search and Replace-----------
const replace = (str, before, after) => {
    var i = str.indexOf(before);
    if(str[i] === str[i].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
        console.log(after);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
        console.log(after);
    }
    return str.replace(before, after);
}
//charAt return the string index
console.log(replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));//return A quick brown fox leaped over the lazy dog
/*----------Search and Replace-----------*/