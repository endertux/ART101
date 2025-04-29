// index.js - Lab 6: Arrays and Objects
// Author: Helwa Halloum
// Date: 4/28/25

// Constants

// Functions

///////////////////////////////////

// Define var
myTransport = ["Foot", "Jeep", "Rides from friends", "Uber/Lyft"];

// create object of main ride
var myMainRide = {
  make: "Jeep",
  model: "Safari",
  color: "Black",
  year: 2022,
  age: function() {
      return 2025 - this.year;
  }
}

//output
document.writeln("Getting around: " + myTransport + "<br>");

//print
document.writeln("My Main Ride: <pre> ",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


///////////////////////////////////

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
