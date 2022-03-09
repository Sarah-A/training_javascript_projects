"use strict";

function Animal(name) {
    this.name = name;
}



let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
              return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
              return("Singing to an awesome tune");
            };
        }
    };
})();


let puppy = new Animal('Poppy') ;
funModule.isCuteMixin(puppy);
funModule.singMixin(puppy);
console.log(puppy.isCute());
console.log(puppy.sing());

class Bird {
    constructor(name) {
        this.name = name;
        this.legs = 2;
    }
}

class Plane {
    constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
    }
}

function flyMixIn(obj) {
    obj.fly = function() {
        return("I'm flying!!");
    }
}

let bird = new Bird("Jack");
console.log(bird.prototype);    // will return undefined. That's why we can't call flyMicIn with bird.prototype (and we don't want to...)
flyMixIn(Bird.prototype);
console.log(bird.name + " " + bird.fly());
let anotherBird = new Bird("Jill");
console.log(anotherBird.name + " " + anotherBird.fly());

let plane = new Plane("777");
flyMixIn(plane);
console.log("plane: " + plane.model + " " + plane.fly());
let jambo = new Plane("Jambo");
// jambo.fly() will return an error since the method was defined on the object and not on the prototype.
console.log("plane: " + jambo.model + " " + jambo.fly());


module.exports = {
    Animal: Animal,
    funModule: funModule,
    Bird: Bird,
    Plane: Plane,
    flyMixIn: flyMixIn
};
