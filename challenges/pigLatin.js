/*----------Pig Latin----------*/
const pig = (str) => {
    return str 
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
console.log(pig('california'));//return aliforniacay
/*----------Pig Latin----------*/
