/*----------Caesars Cipher----------
const change = (str) => str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));

console.log(change("SERR PBQR PNZC"));//FREE CODE CAMP
console.log(change("SERR CVMMN!"));//FREE PIZZA!
/*----------Caesars Cipher----------*/