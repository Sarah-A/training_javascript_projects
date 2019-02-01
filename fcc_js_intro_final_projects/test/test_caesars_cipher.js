"use strict";

let chai = require("chai");
let expect = chai.expect;

let rot13 = require("../caesars_cipher").rot13;

describe("rot13", function() {
    it("correct on all inputs", function() {
        expect(rot13("SERR PBQR PNZC")).to.equal("FREE CODE CAMP");
        expect(rot13("SERR CVMMN!")).to.equal("FREE PIZZA!");
        expect(rot13("SERR YBIR?")).to.equal("FREE LOVE?");
        expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).to.equal("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
    });
});
        