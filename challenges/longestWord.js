/*----------Longest Word---------*/
const find = (s) => s.split(" ").reduce((x, y) => Math.max(x, y.length), 0);
console.log(find("The quick brown fox jumped over the lazy dog")); 
/*----------Longest Word---------*/
