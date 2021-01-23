/*----------Using Join-----------
const joinArray = (str) => {
    return str.split(/\W/).join(" ");
}
console.log(joinArray("May-the-force-be-with-you"))
//return May the force be with you

//Unlike the top
const hyphenated = (str) => str.toLowerCase().trim().split(/\s+/).join("-");
console.log(hyphenated("Winter Is Coming"));//return winter-is-coming
//trim() return the string without space
/*----------Using Join-----------*/

