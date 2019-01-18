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

    describe('diffArray', function(){
        it('should remove values in both arrays', function() {
            expect(jsAlgorithms.diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
                                          ["diorite", "andesite", "grass", "dirt", "dead shrub"])).to.deep.equal(["pink wool"]);

        });

        it('should leave unique values in both arrays', function() {
            expect(jsAlgorithms.diffArray([1, 2, 4, 5, 6, 7], 
                                          [1, 3, 4, 5, 4, 6]).sort()).to.deep.equal([2, 3, 7]);

        });
    });

    describe('whatIsInAName', function() {

        it('should work with one field in source', function() {
            let result = jsAlgorithms.whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
            expect(result).to.deep.equal([{ first: "Tybalt", last: "Capulet" }]);
        });
    });


    describe('spinalCase', function() {
        it('should convert "This Is Spinal Tap"', function() {
            expect(jsAlgorithms.spinalCase("This Is Spinal Tap")).to.equal("this-is-spinal-tap");
        });

        it('should convert "thisIsSpinalTap"', function() {
            expect(jsAlgorithms.spinalCase("thisIsSpinalTap")).to.equal("this-is-spinal-tap");
        });

        it('should convert "thisIs   SpinalTap"', function() {
            expect(jsAlgorithms.spinalCase("thisIs   SpinalTap")).to.equal("this-is-spinal-tap");
        });

        it('The_Andy_Griffith_Show"', function() {
            expect(jsAlgorithms.spinalCase("The_Andy_Griffith_Show")).to.equal("the-andy-griffith-show");
        });

    });

    describe('translatePigLatin', function() {
        it('should convert "consonant" to "onsonantcay"', function() {
            expect(jsAlgorithms.translatePigLatin("consonant")).to.equal("onsonantcay");
        });

        it('should convert "california" to "aliforniacay"', function() {
            expect(jsAlgorithms.translatePigLatin("california")).to.equal("aliforniacay");
        });

       
    });

    describe('pairElement', function() {
        it('pairElement("ATCGA") should return  [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', function() {
            expect(jsAlgorithms.pairElement("ATCGA")).to.deep.equal([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
        });
    });

    describe('missingLetters', function() {
        it('("abce") should return "d"', function() {
            expect(jsAlgorithms.missingLetters("abce")).to.equal("d");
        });
    });

    describe('uniteUnique', function() {
        it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]', function() {
            expect(jsAlgorithms.uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.deep.equal([1, 3, 2, 5, 4]);
        });

        it('uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]', function() {
            expect(jsAlgorithms.uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).to.deep.equal([1, 3, 2, [5], [4]]);
        });
    });

    describe('convertHtml', function() {
        it('convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.', function() {
            expect(jsAlgorithms.convertHtml("Dolce & Gabbana")).to.equal("Dolce &​amp; Gabbana");
        });

        it('should conver "<" correctly', function() {
            expect(jsAlgorithms.convertHtml("Hamburgers < Pizza < Tacos")).to.equal("Hamburgers &​lt; Pizza &​lt; Tacos");
        });

        it('should conver ">" correctly', function() {
            expect(jsAlgorithms.convertHtml("Sixty > twelve")).to.equal("Sixty &​gt; twelve");
        });

        it('should conver "\"" correctly', function() {
            expect(jsAlgorithms.convertHtml('Stuff in "quotation marks"')).to.equal("Stuff in &​quot;quotation marks&​quot;");
        });

        it('should conver "\'" correctly', function() {
            expect(jsAlgorithms.convertHtml("Schindler's List")).to.equal("Schindler&​apos;s List");
        });

        it('should conver "<>" correctly', function() {
            expect(jsAlgorithms.convertHtml("<>")).to.equal("&​lt;&​gt;");
        });

        it('should leave "abc" unchanged', function() {
            expect(jsAlgorithms.convertHtml("abc")).to.equal("abc");
        });

    });

    describe('sumOfOddFibs', function() {
        it('sumOfOddFibs(9) should return 10', function() {
         
            expect(jsAlgorithms.sumOfOddFibs(9)).to.equal(10);
        });
    });

    describe('sumPrimes', function() {
        it('sumPrimes(10) should return 17', function() {
            expect(jsAlgorithms.sumPrimes(10)).to.equal(17);
        });
    });

    describe('smallestCommonMultiple', function() {
        it('smallestCommons([5, 1]) should return 60', function() {
            expect(jsAlgorithms.smallestCommonMultiple([5, 1])).to.equal(60);
        });
    });

    describe('binaryAgent', function() {
        it('should return "Aren\'t bonfires fun!?"', function() {
            const binaryInput = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
            const expectedAsciiOutput = "Aren't bonfires fun!?";
            expect(jsAlgorithms.binaryAgent(binaryInput)).to.equal(expectedAsciiOutput);
        });
    });

    describe('addTogether', function() {
        it('should return the sum if two parameters are provided', function() {
            expect(jsAlgorithms.addTogether(2,3)).to.equal(5);
        });

        it('should return a function with a single argument if called with one argument', function() {
            let addTwo = jsAlgorithms.addTogether(2);
            expect(addTwo(4)).to.equal(6);
        });

        it('addTogether(2, "3") should return undefined.', function() {
            console.log(typeof("3"));
            expect(jsAlgorithms.addTogether(2,"3")).to.equal(undefined);
        });

    });

    describe('orbitalPeriod', function() {

        it('should work with one object', function() {
            let input = [{name : "sputnik", avgAlt : 35873.5553}];
            let expected = [{name: "sputnik", orbitalPeriod: 86400}];
            expect(jsAlgorithms.orbitalPeriod(input)).to.deep.equal(expected);
        });

        it('should work with multiple objects', function() {
            let input = [{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}];
            let expected = [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}];
            expect(jsAlgorithms.orbitalPeriod(input)).to.deep.equal(expected);
        });

    });


})