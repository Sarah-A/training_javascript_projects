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

}


module.exports = {
    JsAlgorithms: JsAlgorithms,
};

