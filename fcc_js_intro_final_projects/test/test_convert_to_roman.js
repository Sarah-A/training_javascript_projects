"use strict";

let chai = require("chai");
let expect = chai.expect;

let convertToRoman = require("../convert_to_roman").convertToRoman;

describe("convertToRoman", function() {
    it("correct on all inputs", function() {
        expect(convertToRoman(2)).to.equal("II");
        expect(convertToRoman(3)).to.equal("III");
        expect(convertToRoman(4)).to.equal("IV");
        expect(convertToRoman(5)).to.equal("V");
        expect(convertToRoman(7)).to.equal("VII");
        expect(convertToRoman(8)).to.equal("VIII");
        expect(convertToRoman(9)).to.equal("IX");
        expect(convertToRoman(10)).to.equal("X");
        expect(convertToRoman(13)).to.equal("XIII");
        expect(convertToRoman(14)).to.equal("XIV");
        expect(convertToRoman(15)).to.equal("XV");
        expect(convertToRoman(16)).to.equal("XVI");
        expect(convertToRoman(18)).to.equal("XVIII");
        expect(convertToRoman(19)).to.equal("XIX");

        expect(convertToRoman(20)).to.equal("XX");
        expect(convertToRoman(30)).to.equal("XXX");
        expect(convertToRoman(39)).to.equal("XXXIX");
        expect(convertToRoman(40)).to.equal("XL");
        expect(convertToRoman(47)).to.equal("XLVII");
        expect(convertToRoman(49)).to.equal("XLIX");
        expect(convertToRoman(50)).to.equal("L");
        expect(convertToRoman(54)).to.equal("LIV");
        expect(convertToRoman(59)).to.equal("LIX");
        expect(convertToRoman(89)).to.equal("LXXXIX");
        expect(convertToRoman(90)).to.equal("XC");
        expect(convertToRoman(98)).to.equal("XCVIII");
        expect(convertToRoman(99)).to.equal("XCIX");
        expect(convertToRoman(100)).to.equal("C");
        expect(convertToRoman(103)).to.equal("CIII");
        expect(convertToRoman(109)).to.equal("CIX");
        expect(convertToRoman(139)).to.equal("CXXXIX");
        expect(convertToRoman(148)).to.equal("CXLVIII");

        expect(convertToRoman(149)).to.equal("CXLIX");
        expect(convertToRoman(154)).to.equal("CLIV");
        expect(convertToRoman(189)).to.equal("CLXXXIX");
        expect(convertToRoman(190)).to.equal("CXC");
        expect(convertToRoman(399)).to.equal("CCCXCIX");
        expect(convertToRoman(499)).to.equal("CDXCIX");
        expect(convertToRoman(500)).to.equal("D");
        expect(convertToRoman(898)).to.equal("DCCCXCVIII");
        expect(convertToRoman(995)).to.equal("CMXCV");
        expect(convertToRoman(1000)).to.equal("M");

        expect(convertToRoman(1004)).to.equal("MIV");
        expect(convertToRoman(1006)).to.equal("MVI");
        expect(convertToRoman(1023)).to.equal("MXXIII");
        expect(convertToRoman(2014)).to.equal("MMXIV");
        expect(convertToRoman(3999)).to.equal("MMMCMXCIX");
    });
});