/*-----------charCodeAt()----------*
const char = (str) => {
    for(let i = 1; i < str.length; i++){ 
        if(str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
console.log(char("abce"));//return d
//charCodeAt() returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
//fromCharCode() returns a string created from the specified sequence of UTF-16 code units 
/*-----------charCodeAt()----------*/