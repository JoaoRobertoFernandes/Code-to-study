/*----------Constructor----------
//Using the constructor to create an object
function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}
let newDog = new Dog("Alfred", "mutt");
console.log(newDog);// return Dog { name: 'Alfred', breed: 'mutt' }

//Using the instanceof to check if the object was created by a constructor 
let Shoes = function (numShoes) {this.numShoes = numShoes;}
let myShoe = new Shoes(3);
console.log(myShoe instanceof Shoes); //return true
/*----------Constructor----------*/