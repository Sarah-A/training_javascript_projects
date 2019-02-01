"use strict";
let chai = require('chai'),
    expect = chai.expect;

let palindrome = require("../palindrome_checker").palindrome;

describe('palindrome', function() {
    it('palindrome("eye") should return true', function() {
        expect(palindrome("eye")).to.equal(true);
    });

    it('Should ignore "_"', function() {
        expect(palindrome("_eye")).to.equal(true);
    });

    it('Should ignore spaces and division to words', function() {
        expect(palindrome("race car")).to.equal(true);
    });

    it('Should recognize a non-palindrome', function() {
        expect(palindrome("not a palindrome")).to.equal(false);
    });

    it('Should ignore puncuation marks', function() {
        expect(palindrome("A man, a plan, a canal. Panama")).to.equal(true);
    });

    it('almostomla Should return false', function() {
        expect(palindrome("almostomla")).to.equal(false);
    });

    it('Should handle numbers', function() {
        expect(palindrome("My age is 0, 0 si ega ym.")).to.equal(true);
    });

    it('"1 eye for of 1 eye." should return false', function() {
        expect(palindrome("1 eye for of 1 eye.")).to.equal(false);
    });

    it('Should ignore any non-alphanumeric symbol', function() {
        expect(palindrome("0_0 (: /-\ :) 0-0")).to.equal(true);
    });

});