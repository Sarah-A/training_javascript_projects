"use strict";

function Dog() {
    this.name = "Dogo",
    this.color = "brown"
}

Dog.prototype.numLegs = 4;

  let myDog = new Dog();
  let myOtherDog = new Dog();
  console.log(myDog.name);
  console.log(myDog.numLegs);
  myOtherDog.numLegs = 3;
  console.log(myDog.numLegs);
  console.log(myOtherDog.numLegs);

  console.log(`prototypes and types: myDog: ${typeof(myDog)} , myDog.prototype: ${myDog.prototype}`);
  
  console.log('Using the new method for creating new objects:');
  let myDogWithRecommendedWay = Object.create(Dog.prototype);
  console.log(typeof(myDogWithRecommendedWay));
  console.log(myDogWithRecommendedWay.name);
  console.log(myDogWithRecommendedWay.numLegs);

  console.log('Using closures to create private members:');
  function Bird() {
      let weight = 15;
      this.getWeight = function() {
          return weight;
      }
      this.setWeight = function(val) {
          weight = val;
      }
  }

  let bird1 = new Bird();
  let bird2 = new Bird();
  console.log(bird1.getWeight());
  console.log(bird2.getWeight());  
  bird2.setWeight(8);
  console.log(bird1.getWeight());
  console.log(bird2.getWeight());  

