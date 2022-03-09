//"use strict";

console.log("\nBefore fixing the 'this' in anonymous function:\n");

// The fail_user uses the simple way to pass 'this' to the inner function.
// This will fail since in javascript, the inner function doesn't know the 'this' of the outer object:
// If we would have used "use strict" - it will fail and return an error. Without strict, this will be undefined:
var fail_user = {
    tournament:"The Masters",
    data      :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
    ],

    clickHandler:function () {
    // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.

        this.data.forEach (function (person) {
        // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.
        // This inner function cannot access the outer function's "this"
    
            console.log ("What is This referring to? " + this); //[object Window]
        
            console.log (person.name + " is playing at " + this.tournament);
            // T. Woods is playing at undefined
            // P. Mickelson is playing at undefined
         })
    }

};

fail_user.clickHandler(); // What is "this" referring to? [object Window]

console.log("\nWith 'this' fixed in anonymous function:\n");

// This is how to fix it - initialize a local variable with this before calling the anonymous function:
var user = {
    tournament:"The Masters",
    data      :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}

    ]   ,

    clickHandler:function () {
    // To capture the value of "this" when it refers to the user object, we have to set it to another variable here:
    // We set the value of "this" to theUserObj variable, so we can use it later
    var theUserObj = this;
    this.data.forEach(function (person) {
        // Instead of using this.tournament, we now use theUserObj.tournament
        console.log (person.name + " is playing at " + theUserObj.tournament);
        });
    }
    
};

user.clickHandler();
// T. Woods is playing at The Masters
//  P. Mickelson is playing at The Masters

// This data variable is a global variable

var information = {
    count: 0,
    showCounter:function (event) {
        console.log (`Current Counter is: ${this.count}`);
    }
};

// Assign the user.showData to a variable - this will cause the 'this' to be undefined in showUserCounter:
var showUserCounter = information.showCounter;
showUserCounter(); 

var fixedUserCounter = information.showCounter.bind(information);
fixedUserCounter();



