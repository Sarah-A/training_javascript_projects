// "use strict";
let assert = require('assert');
let jsAlgorithms = require("../js_algorithms").JsAlgorithms;
// import {JsAlgorithms} from "./../js_algorithms";
// let jsAlgorithms = JsAlgorithms;



describe('JsAlgorithms', function() {

    describe('repratStringNumTimes', function() {

        it('should return "***"', function() {
            assert.equal("***", jsAlgorithms.repeatStringNumTimes("*", 3));
        });

        it('should return "abcabcabc"', function() {
            assert.equal("abcabcabc", jsAlgorithms.repeatStringNumTimes("abc", 3));
        });

        it('should return "abc"', function() {
            assert.equal("abc", jsAlgorithms.repeatStringNumTimes("abc", 1));
        });

        it('should return ""', function() {
            assert.equal("", jsAlgorithms.repeatStringNumTimes("abc", 0));
        });

        it('should return ""', function() {
            assert.equal("", jsAlgorithms.repeatStringNumTimes("abc", -5));
        });       
    });

    describe('mutation',function() {
        
        it('should return false', function() {
            assert.equal(false, jsAlgorithms.mutation(["hello", "hey"]));
        });    

        it('mutation(["hello", "Hello"]) should return true', function() {
            assert.equal(true, jsAlgorithms.mutation(["hello", "Hello"]));
        });

        it('mutation(["Mary", "Army"]) should return true', function() {
            assert.equal(true, jsAlgorithms.mutation(["Mary", "Army"]));
        });

        it('mutation(["Mary", "Aarmy"]) should return false', function() {
            assert.equal(false, jsAlgorithms.mutation(["Mary", "Aarmy"]));
        });

        it('mutation(["Alien", "line"]) should return false', function() {
            assert.equal(false, jsAlgorithms.mutation(["Alien", "line"]));
        });
        
    });

    describe('containsAllLetters',function() {
        
        it('Missing letter should return false', function() {
            assert.equal(false, jsAlgorithms.containsAllLetters(["hello", "hey"]));
        });    

        it('containsAllLetters(["hello", "Hello"]) should return true', function() {
            assert.equal(true, jsAlgorithms.containsAllLetters(["hello", "Hello"]));
        });

        it('containsAllLetters(["Mary", "Army"]) should return true', function() {
            assert.equal(true, jsAlgorithms.containsAllLetters(["Mary", "Army"]));
        });

        it('repeated letter in set should be ignored and return true', function() {
            assert.equal(true, jsAlgorithms.containsAllLetters(["Mary", "Aarmy"]));
        });

        it('containsAllLetters(["Alien", "line"]) should return true', function() {
            assert.equal(true, jsAlgorithms.containsAllLetters(["Alien", "line"]));
        });
        
    });

});


// function test_truncateString() {
//     console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//     console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
//     console.log(truncateString("A-", 1));
// }

// //findElement([1, 2, 3, 4], num => num % 2 === 0);

// function test_titleCase() {
//     titleCaseWithSplit("I'm a little tea pot");
//     titleCaseWithRegex("I'm a little tea pot");
//     titleCaseWithSplit("sHoRt AnD sToUt");
//     titleCaseWithRegex("sHoRt AnD sToUt");
//     titleCaseWithSplit("HERE IS MY HANDLE HERE IS MY SPOUT");
//     titleCaseWithRegex("HERE IS MY HANDLE HERE IS MY SPOUT");
// }

// function test_frankenSplice() {
//     frankenSplice([1, 2, 3], [4, 5, 6], 1);
//     frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

// }

// function test_removeFalseValues(arr) {
//     removeFalseValues([7, "ate", "", false, 9]);
//     removeFalseValues([false, null, 0, NaN, undefined, ""]); // should return [].    
// }

// function test_getIndexToIns() {
//     let result = 0;
//     result = getIndexToIns([10, 20, 30, 40, 50], 35);    // should return 3.
//     console.log(result);
//     result = getIndexToIns([5, 3, 20, 3], 5);
//     console.log(result);


// }

