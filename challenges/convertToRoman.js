/*----------Convert to Roman---------
const convert = (val) => {
    let decimalVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanVal = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let roman = "";

    for (let i = 0; i < decimalVal.length; i++) {
        while (decimalVal[i] <= val) {
          roman += romanVal[i];
          val -= decimalVal[i];
        }
      }

    return roman;
}
console.log(convert(45));//return XLV
/*----------Convert to Roman---------*/