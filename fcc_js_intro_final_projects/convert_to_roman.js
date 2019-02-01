"use strict";

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

    const convertionUnits = [
        {
            units: 1000,
            onesUnit: "M",
            fivesUnit: "",
            tensUnit: ""
        },
        {
            units: 100,
            onesUnit: "C", 
            fivesUnit: "D", 
            tensUnit: "M" 
        },
        {
            units: 10,
            onesUnit: "X", 
            fivesUnit: "L", 
            tensUnit: "C" 
        },
        {
            units: 1,
            onesUnit: "I", 
            fivesUnit: "V", 
            tensUnit: "X" 
        }
        ];
    function verifyInput(num) {
        return (num > 0 || num < 4000);
    }

    function convertUnitsToRoman(value, convertionUnit) {
        let unit = (convertionUnit.units > 1 ? Math.round((value / convertionUnit.units) - 0.5) : value);

        if (unit === 9) {
            return (convertionUnit.onesUnit + convertionUnit.tensUnit);
        } else if (unit > 4) {
            return (convertionUnit.fivesUnit + convertionUnit.onesUnit.repeat(unit - 5));
        } else if (unit === 4) {
            return (convertionUnit.onesUnit + convertionUnit.fivesUnit);
        } else {
            return convertionUnit.onesUnit.repeat(unit);
        }
    }

    if (!verifyInput(num)) {
        throw "number out of range (1-3999)!";
    }

    let romanNumber = "";
    convertionUnits.forEach( function(convertionUnit) {
        romanNumber += convertUnitsToRoman(num, convertionUnit);
        num = num % convertionUnit.units;
    });    
    return romanNumber;
}

module.exports = {
    convertToRoman: convertToRoman
};