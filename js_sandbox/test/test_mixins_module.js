"use strict";
let chai = require('chai'),
    expect = chai.expect;
const { Bird, Plane, flyMixIn } = require('../mixins_module');
let mixinsModule = require('../mixins_module');

describe('funModule', function() {

    it('should add an isCute and sing mixins to object', function() {
        let puppy = new mixinsModule.Animal('Poppy') ;
        mixinsModule.funModule.isCuteMixin(puppy);
        mixinsModule.funModule.singMixin(puppy);
        expect(puppy.isCute()).to.equal(true);
        expect(puppy.sing()).to.equal("Singing to an awesome tune");
    });

    if("test flyMixIn", () => {
        let bird = new Bird("Jack");
        flyMixIn(bird);
        expect(bird.fly()).to.equal("I'm flying!!");


        let plane = new Plane("777");
        flyMixIn(plane);
        expect(plane.fly()).to.equal("I'm flying!!");

    });
})
