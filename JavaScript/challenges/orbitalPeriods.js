/*---------Orbital Periods----------
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var newArr = [];
    var a = 2 * Math.PI;

    //Orbit
    const orbtPeriod = (obj) => {
        let c = Math.pow(earthRadius + obj.avgAlt, 3);
        let b = Math.sqrt(c / GM);
        let orbit = Math.round(a * b);
        return {name: obj.name, orbitalPeriod: orbit};
    }

    for (let i in arr) {
        newArr.push(orbtPeriod(arr[i]));
    }
    return newArr;
  }
  
 console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
//return [ { name: 'sputnik', orbitalPeriod: 86400 } ]
 /*---------Orbital Periods----------*/