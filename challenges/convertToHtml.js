/*----------Convert Html entities----------
const convert = (str) => {
    let corresponding = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }
    return str.replace(/([&<>\"'])/g, pair => corresponding[pair]);
}
console.log(convert("Dolce & Gabbana"));//return Dolce &amp; Gabbana
/*----------Convert Html entities----------*/