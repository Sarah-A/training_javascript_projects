"use strict";

function  simulatePromise(data) {
    return new Promise(function(resolve, reject) {
        console.log(`Promise in progress. toSucceed: ${data.toSucceed} , text: ${data.text}`);
        if(data.toSucceed) {
            resolve(data.text);            
        }
        else {
            reject(data.text);
        }
    });
}

// function simulateSuccessOnlyPromise(message) {
//     resolve()
// }

function logSuccess(message) {
    console.log(`Promise Succedeed: ${message}`);
}

function logFailure(message) {
    console.log(`Promise Failed: ${message}`);
}

// Notice that the Promises will go on the JS queue and will only run asynchronically when the main code finishes!!

console.log("Before Test 1");
simulatePromise({toSucceed: true, text: "Promise Test 1 - should Succeed"}).then( logSuccess, logFailure);
console.log("After Test 1, Before Test 2");
simulatePromise({toSucceed: false, text: "Promise Test 2 - should Fail"}).then( logSuccess, logFailure);
console.log("After Test 2");

// Received Output:
// Before Test 1
// Promise in progress. toSucceed: true , text: Promise Test 1 - should Succeed
// After Test 1, Before Test 2
// Promise in progress. toSucceed: false , text: Promise Test 2 - should Fail
// After Test 2
// Promise Succedeed: Promise Test 1 - should Succeed
// Promise Failed: Promise Test 2 - should Fail

// Add more Promises to chain:
function FailOn2ndPromise(message) {
    console.log("Failed on 2nd Promise");
}

function SucceedOn2ndPromise(message) {
    console.log("Succeed on 2nd Promise");
}

console.log("Before Test 3");
simulatePromise({toSucceed: true, text: "Promise Test 3 - should Succeed twice"}).then( logSuccess, logFailure).then(SucceedOn2ndPromise, FailOn2ndPromise);
console.log("After Test 3, Before Test 4");
simulatePromise({toSucceed: true, text: "Promise Test 4 - should Succeed on the 1st and Fail on the 2nd"}).then( logSuccess, logFailure).then(FailOn2ndPromise);
console.log("After Test 4");

// NOTE: Every stage on asynchronization will go back into the queue so that the 2nd stage of test 3 will only run after stage 1 of test 4 
//       has finished etc!!!

// Received output:
// Before Test 1
// Promise in progress. toSucceed: true , text: Promise Test 1 - should Succeed
// After Test 1, Before Test 2
// Promise in progress. toSucceed: false , text: Promise Test 2 - should Fail
// After Test 2
// Before Test 3
// Promise in progress. toSucceed: true , text: Promise Test 3 - should Succeed twice
// After Test 3, Before Test 4
// Promise in progress. toSucceed: true , text: Promise Test 4 - should Succeed on the 1st and Fail on the 2nd
// After Test 4
// Promise Succedeed: Promise Test 1 - should Succeed
// Promise Failed: Promise Test 2 - should Fail
// Promise Succedeed: Promise Test 3 - should Succeed twice
// Promise Succedeed: Promise Test 4 - should Succeed on the 1st and Fail on the 2nd
// Succeed on 2nd Promise
// Failed on 2nd Promise
