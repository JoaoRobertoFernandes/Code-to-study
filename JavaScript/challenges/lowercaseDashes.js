/*----------Lowercase and Dashes----------
const lowerDash = (str) => {
    return str  
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}
console.log(lowerDash("thisIsSpinalTap"));
/*----------Lowercase and Dashes----------*/