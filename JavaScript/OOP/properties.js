/*----------Properties-----------
//Using for...in to pass pity properties to array props 
//Own properties are defined directly on the object instance itself
//Prototype properties are defined on the prototype
function Dog(name) {
    this.name = name;
}

let pity = new Dog("Fon");
let props = [];
for(let prop in pity){
    if(pity.hasOwnProperty(prop)){
        props.push(prop);
    }
}
console.log(props);//return ['name']

//Using Prototype properties
Dog.prototype.breed = "beagle";
let newDog = new Dog("Fon");
console.log(newDog.breed);//return "beagle"

//Iterate over all properties 
let ownProps = [];
let prototypesProps = [];
for(let prop in newDog){
    if(newDog.hasOwnProperty(prop)){
        ownProps.push(prop);
    } else {
        prototypesProps.push(prop);
    }
}
console.log(ownProps);//return [ 'name' ]
console.log(prototypesProps);//return  [ 'breed' ]
/*----------Properties-----------*/