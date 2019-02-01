"use strict";

let chai = require("chai");
let expect = chai.expect;

let telephoneCheck = require("../telephone_check").telephoneCheck;


describe("telephoneCheck", function() {
    it("should pass all tests", function() {
        expect(telephoneCheck("555-555-5555")).to.equal(true);
        expect(telephoneCheck("1 555-555-5555")).to.equal(true);
        expect(telephoneCheck("1 (555) 555-5555")).to.equal(true);
        expect(telephoneCheck("5555555555")).to.equal(true);
        expect(telephoneCheck("555-555-5555")).to.equal(true);
        expect(telephoneCheck("(555)555-5555")).to.equal(true);
        expect(telephoneCheck("1(555)555-5555")).to.equal(true);
        expect(telephoneCheck("555-5555")).to.equal(false);
        expect(telephoneCheck("5555555")).to.equal(false);
        expect(telephoneCheck("1 555)555-5555")).to.equal(false);
        expect(telephoneCheck("1 555 555 5555")).to.equal(true);
        expect(telephoneCheck("1 456 789 4444")).to.equal(true);
        expect(telephoneCheck("123**&!!asdf#")).to.equal(false);
        expect(telephoneCheck("55555555")).to.equal(false);
        expect(telephoneCheck("(6054756961)")).to.equal(false);
        expect(telephoneCheck("2 (757) 622-7382")).to.equal(false);
        expect(telephoneCheck("0 (757) 622-7382")).to.equal(false);
        expect(telephoneCheck("-1 (757) 622-7382")).to.equal(false);
        expect(telephoneCheck("2 757 622-7382")).to.equal(false);
        expect(telephoneCheck("10 (757) 622-7382")).to.equal(false);
        expect(telephoneCheck("27576227382")).to.equal(false);
        expect(telephoneCheck("(275)76227382")).to.equal(false);
        expect(telephoneCheck("2(757)6227382")).to.equal(false);
        expect(telephoneCheck("2(757)622-7382")).to.equal(false);
        expect(telephoneCheck("555)-555-5555")).to.equal(false);
        expect(telephoneCheck("(555-555-5555")).to.equal(false);
        expect(telephoneCheck("(555)5(55?)-5555")).to.equal(false);
    });
});