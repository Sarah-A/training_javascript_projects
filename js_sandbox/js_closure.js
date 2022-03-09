"use strict";

class Person {
    
    constructor(name) {
        this.publicName = name;
        let privateName = name;

        this.getNameUsingClosure = function() {
            console.log(privateName);
        }

    }

    getNameUsingThis() {
        console.log(this.publicName);
    }   
}


let person1 = new Person("person1");

console.log("Privaty using Closures:")
console.log(`object members are always visible through this: ${person1.publicName}`); // return name
console.log(`object members are private with closures: ${person1.privateName}`);    // reutrn undefined


console.log("Calling the methods through the objects - should work for both:");
person1.getNameUsingThis();
person1.getNameUsingClosure();

console.log("Calling the methods in a different context:");
console.log("using this should fail:")
setTimeout(person1.getNameUsingThis,0);
console.log("using this should work as expected:")
setTimeout(person1.getNameUsingClosure,0);

