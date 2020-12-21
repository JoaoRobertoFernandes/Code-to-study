/*----------Prototype-----------
//Adding prototypes properties at once
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    //eat: () => console.log("Eating"),
}

//DRY
function Eat() {}
Eat.prototype.eat = () => console.log("Eating");

let beagle = Object.create(Eat.prototype);
//console.log(Dog.prototype.eat);//return [Function: eat]

//Using isPrototypeOf() to check for inherits 
//console.log(Dog.prototype.isPrototypeOf(beagle));//return true
console.log(beagle.eat());

/*----------Prototype-----------*/
