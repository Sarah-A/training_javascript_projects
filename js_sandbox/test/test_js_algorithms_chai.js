"use strict";
let chai = require('chai'),
    expect = chai.expect;
let jsAlgorithms = require("../js_algorithms").JsAlgorithms;

describe('JsAlgorithm', function() {
    
    describe('chunkArrayInGroups', function() {
       
        it('should work when array length is a multiplication of size', function() {
            expect(jsAlgorithms.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).to.deep.equal([[0, 1, 2], [3, 4, 5]]);
        });

        it('should work when array length is not a multiplication of size', function() {
            expect(jsAlgorithms.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).to.deep.equal([[0, 1, 2], [3, 4, 5],[6]]);
        });

    });
})