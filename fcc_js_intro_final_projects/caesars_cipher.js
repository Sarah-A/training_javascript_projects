"use strict";

/*
    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

    Write a function which takes a ROT13 encoded string as input and returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    const ACharCode = "A".charCodeAt(0);
    const ZCharCode = "Z".charCodeAt(0);
    const letters = Array.from({length: ZCharCode - ACharCode + 1},
                                (_, i) => String.fromCharCode(i + ACharCode)); 
    const cipher = letters.slice(13).concat(letters.slice(0,13));
    function letterToIndex(letter) { return (letter.charCodeAt(0) - ACharCode); }

    return str.replace(/([A-Z])/g, (letter) => cipher[letterToIndex(letter)]);

}

module.exports = {
    rot13: rot13
};