"use strict";

let chai = require("chai"),
    expect = chai.expect;

let cw7kyu = require("../code_wars_level_7kyu");


describe("Sample tests", function() {
    it("Should pass Sample tests", function() {
      expect(cw7kyu.arrayDiff([], [4,5])).to.deep.equal([]);
      expect(cw7kyu.arrayDiff([3,4], [3])).to.deep.equal([4]);
      expect(cw7kyu.arrayDiff([1,8,2], [])).to.deep.equal([1,8,2]);
      expect(cw7kyu.arrayDiff([1,2,2,2,3],[2])).to.deep.equal([1,3]);      
    });
  }); 