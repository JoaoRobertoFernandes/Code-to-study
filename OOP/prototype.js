/*----------Prototype-----------
//Adding prototypes properties at once
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: () => console.log("Eating"),
}
let beagle = new Dog("Jo");
console.log(Dog.prototype.eat);//return [Function: eat]

//Using isPrototypeOf() to check for inherits 
console.log(Dog.prototype.isPrototypeOf(beagle));//return true
/*----------Prototype-----------*/
