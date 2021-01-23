/*----------Binary string---------
const translate = (str) => {
    var binaryStr = str.split(" ");
    var code = [];
    for (let i = 0; i < binaryStr.length; i++) {
        code.push(String.fromCharCode(parseInt(binaryStr[i], 2)))
    }
    return code.join("");
}
console.log(translate("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))//returns I love FreeCodeCamp!

console.log(translate("01000101 01100001 01110100 00100000 01101101 01101111 01110010 01100101 00100001"));//return Eat more!
/*----------Binary string---------*/