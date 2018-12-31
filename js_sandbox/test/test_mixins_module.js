"use strict";
let chai = require('chai'),
    expect = chai.expect;
let mixinsModule = require('../mixins_module');

describe('funModule', function() {

    it('should add an isCute and sing mixins to object', function() {
        let puppy = new mixinsModule.Animal('Poppy') ;
        mixinsModule.funModule.isCuteMixin(puppy);
        mixinsModule.funModule.singMixin(puppy);
        expect(puppy.isCute()).to.equal(true);
        expect(puppy.sing()).to.equal("Singing to an awesome tune");
    })
})
