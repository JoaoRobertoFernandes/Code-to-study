/*----------Array matching----------
function whatIsInAName(collection, source) {
    var sourceObj = Object.keys(source);
    return collection
        .filter(n => {
            for(let i = 0; i < sourceObj.length; i++){
                if(!n.hasOwnProperty(sourceObj[i]) || n[sourceObj[i]] !== source[sourceObj[i]]){
                    return false;
                }
            }
            return true;
        })
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); //return [ { first: 'Tybalt', last: 'Capulet' } ]
  /*----------Array matching----------*/