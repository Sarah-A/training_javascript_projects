"use strict";

class JsAlgorithms {

    static repeatStringNumTimes(str, num) {
        // repeat after me
        let result = "";
        while (num > 0) {
            result = result.concat(str);
            num--;
        }
        return result;
    }

    static truncateString(str, num) {
        // Clear out that junk in your trunk
        if (str.length > num) {
            str = str.slice(0, num).concat("...");
        }
        return str;
    }

    static findElement(arr, func) {
        for (let item in arr) {
            if (func(item)) {
                return item;
            }
        }
        return undefined;
    }

    static titleCaseWithSplit(str) {
        let words = str.toLowerCase().split(" ");
        for (let word in words) {
            // console.log(`char: ${words[word][0]} -> `)
            words[word] = words[word][0].toUpperCase() + words[word].slice(1);
        }
        str = words.join(" ");
        console.log(str);
        return str;
    }
    
    static titleCaseWithRegex(str) {
        let firstLetterRegex = /^([a-z])|\s+([a-z])/g;
        // This will also work. However, I wanted to test with the "$1" replacement expression:
        // str = str.toLowerCase().replace(firstLetterRegex, x => x.toUpperCase());
        str = str.toLowerCase().replace(firstLetterRegex, (x = "$1") => x.toUpperCase());
        console.log(str);
        return str;
    }

    static frankenSplice(arr1, arr2, n) {
        // It's alive. It's alive!
        let result = arr2.slice(0);
        result.splice(n, 0, ...arr1);
    
        console.log(arr1);
        console.log(arr2);
        console.log(result);
        return result;
    }
    
    
    static removeFalseValues(arr) {
        // Don't show a false ID to this bouncer.
        arr = arr.filter(item => Boolean(item));
        console.log(arr);
        return arr;
    }
    
    
    static getIndexToIns(arr, num) {
        // Find my place in this sorted array.
        arr.sort((a, b) => (a - b));
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (num <= arr[i]) {
                return i;
            }
        }
        return arr.length;
    }
    
    
    static mutation(arr) {
        const sortedWord1 = arr[0].toLowerCase().split("").sort().join("");
        const sortedWord2 = arr[1].toLowerCase().split("").sort().join("");
        const result = (sortedWord1 == sortedWord2);
        console.log(result);
        return result;
    }

    static containsAllLetters(arr) {             
        const inString = arr[0].toLowerCase();
        const letters = new Set([...arr[1].toLowerCase()]);        
        console.log(inString);
        for(let letter of letters) {
            if( inString.indexOf(letter) == -1) {
                return false;
            }
        } 
        return true;
    }

    static chunkArrayInGroups(arr, size) {
        let from = 0;
        let result = [];
        while(from < arr.length) {
            result.push(arr.slice(from, from+size));
            from += size;
        }
        return result;
    }

    // return an array with all the element in either arrrays but not in both
    static diffArray(arr1, arr2) {
        let unique1 = arr1.filter(item => arr2.indexOf(item) == -1);
        let unique2 = arr2.filter(item => arr1.indexOf(item) == -1);
        unique1.push(...unique2);
        return unique1;
    }

    /*  Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
         For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
    */
    static whatIsInAName(collection, source) {
        // What's in a name?
        let arr = [...collection];
        // Only change code below this line
        Object.keys(source).forEach(key => {
            arr = arr.filter(item => item[key] == source[key])
        })
        
        // Only change code above this line
        return arr;
    }

    // Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
    static spinalCase(str) {
        return str.replace(/(\w)([A-Z])/g,"$1 $2").split(/[\W_]+/).join("-").toLowerCase();
    }

    /*
    Translate the provided string to pig latin.
    Pig Latin takes the first consonant (or consonant cluster) of an English word, 
        moves it to the end of the word and suffixes an "ay".
    If a word begins with a vowel you just add "way" to the end.
    Input strings are guaranteed to be English words in all lowercase.
    */    
    static translatePigLatin(str) {

        // the short form:
        //return str.replace(/(^[aeiou])(.*)/,"$1$2way").replace(/(^[^aeiou]+)(.*)/,"$2$1ay");

        // The readable form:
        function translateWordsStartingWithVowel(str) {
            return str.replace(/(^[aeiou])(.*)/,"$1$2way");
        }

        function translateWordsStartingWithConsonants(str) {
            return str.replace(/(^[^aeiou]+)(.*)/,"$2$1ay");    
        }
        
        return translateWordsStartingWithConsonants(translateWordsStartingWithVowel(str));
        
    }

    /*
    Perform a search and replace on the sentence using the arguments provided and return the new sentence.

    First argument is the sentence to perform the search and replace on.

    Second argument is the word that you will be replacing (before).

    Third argument is what you will be replacing the second argument with (after).

    Note
    Preserve the case of the first character in the original word when you are replacing it. 
    For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
    */
    static myReplace(str, toReplace, withStr) {

        let firstLetter = withStr.charAt(0).toLowerCase();
        if(toReplace.charAt(0) == toReplace.charAt(0).toUpperCase()) {
            firstLetter = withStr.charAt(0).toUpperCase();
        } 
        withStr = firstLetter + withStr.slice(1);

        return str.replace(toReplace, withStr);

    }


    /*
    The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
    Base pairs are a pair of AT and CG. Match the missing element to the provided character.
    Return the provided character as the first element in each array.
    For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
    The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
    */
    static pairElement(str) {

        const Pair = {
            A() {return "T";},
            T() {return "A";},
            C() {return "G";},
            G() {return "C";}            
        };
        let singleElements = str.split("");
        return singleElements.map(element => [element, Pair[element]()]);
    }

    static missingLetters(str) {

        const range = (start, stop, step) => Array.from({ length: (stop - start) / step },
                                                         (_, i) => start + (i * step));
        const lettersRange = range(str.charCodeAt(0), str.charCodeAt(str.length-1), 1).map(code => String.fromCharCode(code)); 
        let result = lettersRange.filter(letter => str.indexOf(letter) == -1).join();
        if(result.length) {
            return result;
        }
        return undefined;
    }

    static uniteUnique(...arrays) {        
        let united = new Set([...arrays[0]]);
        for(let i=1 ; i<arrays.length ; ++i) {
            for(let item of arrays[i]) {
                united.add(item);                
            }
        }
        return [...united];
    }

    /*
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
    */
    static convertHtml(str) {
        const HtmlConverter = {
            "&": "&​amp;",
            "<": "&​lt;", 
            ">": "&​gt;", 
            '"': "&​quot;",
            "'": "&​apos;"
        }
        return str.replace(/\&|<|>|\"|\'/g, specialChar => HtmlConverter[specialChar]);

    }

    /*
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
    The first two numbers in the Fibonacci sequence are 1 and 1. 
    Every additional number in the sequence is the sum of the two previous numbers. 
    The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
    */
    static sumOfOddFibs(num) {
        
            let previousFib = 0;
            let currentFib = 1;
            let sum = 0;

            while(currentFib <= num) {
                if(currentFib % 2 == 1) {
                    sum += currentFib;
                }
                [currentFib, previousFib] = [currentFib + previousFib, currentFib];
            }

            return sum;
    }

    // Sum all the prime numbers up to and including the provided number.    
    static sumPrimes(num) {
        const isPrime = num => {
            for(let i=2 ; i<= Math.sqrt(num) ; ++i) {
                if(num % i == 0) {
                    return false;
                }
            }
            return true;
        }

        let sum = 0;
        for(let i=2 ; i<=num ; ++i) {
            console.log(sum);
            if(isPrime(i)) {
                sum += i;
            }
        }
        return sum;
    }

    // Note: assume that none of the numbers is 0 and none is negative
    static smallestCommonMultiple(arr) {

        const gcd = (num1, num2) => {
            for(let i = Math.min(num1, num2) ; i >= 2 ; --i) {
                if( (num1 % i == 0) && (num2 % i == 0) ) {
                    return i;
                }
            }
            return 1;
        }
        
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        let gcm = min;
        for(let i = min + 1; i <= max ; ++i) {
            gcm = (gcm * i) / gcd( gcm, i);
        }
        return gcm;

    }

    // Flatten a nested array. You must account for varying levels of nesting.
    static flattenArray(arr) {
        return arr.reduce((flatArr, item) => (Array.isArray(item) ? 
                                              flatArr.concat(flattenArray(item)) : 
                                              flatArr.concat(item)), []);
    }

    // Return an English translated sentence of the passed binary string.
    // The binary string will be space separated.
    static binaryAgent(str) {
        return str.split(/\W/).map(val => String.fromCharCode(parseInt(val, 2))).join(""); 
    }


    /*
    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
    Calling this returned function with a single argument will then return the sum:
    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.
    If either argument isn't a valid number, return undefined.
    */
    static addTogether(num1, num2 = undefined) {
        const addAnother = num => {return (typeof(num) != "number" ? undefined : num1 + num);};
        
        if( typeof(num1) != "number" || 
            ( (num2 != undefined) && (typeof(num2) != "number")) ) {
            return undefined;
        }
        
        if(num2 == undefined) {
            return addAnother;
        }
        
        return addAnother(num2);
    }


    /*
    Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
    The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
    You can read about orbital periods on Wikipedia.
    The values should be rounded to the nearest whole number. The body being orbited is Earth.
    The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
    */
    static orbitalPeriod(arr) {
        var GM = 398600.4418;
        var earthRadius = 6367.4447;

        const orbitalPeriodCalculator = (acc, cur) => {
            acc.push({name: cur.name,
                        orbitalPeriod: Math.round((Math.sqrt(Math.pow(cur.avgAlt + earthRadius, 3)/GM)) * 2 * Math.PI)});
            return acc;
        };

        return arr.reduce( orbitalPeriodCalculator, []);
        
    }

    
        
}

/*
*/
let Person = function(firstAndLast) {
    
    // firstName and lastName are define in this function (constructor) only
    // in order to make them private!!! If I define them with this. - it will
    // make them visible from outside the object, making them public!!
    let firstName = "";             
    let lastName = "";
  
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    }; 
    
    this.setFirstName = function(first) {
      firstName = first;
    };
  
    this.setLastName = function(last) {
      lastName = last;
    };
  
    this.setFullName = function(firstAndLast) {
      let splitNames = firstAndLast.split(/\W/);
      this.setFirstName(splitNames[0]);
      this.setLastName(splitNames[1]);
    }
  
    this.setFullName(firstAndLast);
    
  };
  


module.exports = {
    JsAlgorithms: JsAlgorithms,
};


