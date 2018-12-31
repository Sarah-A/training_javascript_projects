"use strict";


function ObjectFields() {

  // Setup
  var collection = {
      "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [ 
          "Let It Rock", 
          "You Give Love a Bad Name" 
        ]
      },
      "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [ 
          "1999", 
          "Little Red Corvette" 
        ]
      },
      "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
      },
      "5439": {
        "album": "ABBA Gold"
      }
  };
  // Keep a copy of the collection for tests
  var collectionCopy = JSON.parse(JSON.stringify(collection));
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
  
    if(!collection.hasOwnProperty(id)) {
        collection[id] = {};
    }
    
    if(value.length == 0) {
      delete collection[id][prop];
    } else if(prop == "tracks") {
      if( !collection[id].hasOwnProperty(prop)) {
        collection[id]["tracks"] = [];
      }
      collection[id]["tracks"].push(value);
    } else {
      collection[id][prop] = value;
    }
    
    return collection;
  }
  
  // Alter values below to test your code
  updateRecords(5439, "artist", "ABBA");
  updateRecords(1345, "tracks", 5);
  console.log(collection);
}

function objectsInArray() {

  
  //Setup
  var contacts = [
    {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
    },
    {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
    }
  ];
  
  
  function lookUpProfile(name, prop){
    // Only change code below this line
    
    for(var i=0 ; i<contacts.length ; i++) {
      if( contacts[i].firstName == name) {      
        if( contacts[i].hasOwnProperty(prop)) {
          return (contacts[i][prop]);
        }
        else {
          return "No such propery";
        }
      }
    }
    
    return "No such contact";;
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Kristian", "lastName"));
  console.log(lookUpProfile("Sherlock", "likes"));
  console.log(lookUpProfile("Akira", "address"));
}

function testTypes() {

  console.log(typeof(5));
  console.log(typeof(5.7));
}  

function defaultParams() {

  function testDefaultParam(val,arr=[]) {
    arr.push(val);
    console.log(arr);
  }
  
  let arr1 = [];
  testDefaultParam(1, arr1);
  testDefaultParam(2, arr1);
  testDefaultParam(3);
  testDefaultParam(4);
  
}

function testClass() {
  class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
      this.count = 0;
    }

    countMyCalls() {
      this.count++;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');

  console.log(typeof(zeus));
  console.log(zeus);
  console.log(zeus.targetPlanet);
  zeus.targetPlanet = "Saturn";
  console.log(zeus.targetPlanet);
  zeus.countMyCalls();
  zeus.countMyCalls();
  console.log(zeus);

}

function regularExpressions() {

  let sampleWord = "bana12";
  let pwRegex = /(?=\w{6,})(?=.*\d{2,})/; // Change this line
  let result = sampleWord.match(pwRegex);
  console.log(result)

  let repeatNum = "42 42 42";
  let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
  result = repeatNum.match(reRegex);
  console.log(result);

  repeatNum = "42 42 42 42";
  result = repeatNum.match(reRegex);
  console.log(result);

let hello = "   Hello, World!  ";
let leadingTrailingSpaceRemoverRegex = /^\s*(H.*?)\s*$/; // Change this line
// let result = hello.match(wsRegex);
result = hello.replace(leadingTrailingSpaceRemoverRegex,"$1"); // Change this line
console.log(result);

}

// regularExpressions();

function forInIteration() {
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(obj) {
    // change code below this line
    let count = 0;
    for (let user in obj) {
      if(obj[user].online) {
        count++;
      }
    }
    return count; 
    // change code above this line
  }
  
  console.log(countOnline(users));
}

forInIteration();