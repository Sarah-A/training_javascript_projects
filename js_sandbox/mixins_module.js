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

module.exports = {
    Animal: Animal,
    funModule: funModule
};


let puppy = new Animal('Poppy') ;
funModule.isCuteMixin(puppy);
funModule.singMixin(puppy);
console.log(puppy.isCute());
console.log(puppy.sing());