// index.js - Lab 8: Anon Functions and Callbacks
// Author: Helwa Halloum
// Date: 5/8/25

function isHelwa(x){
  return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isHelwa(1));
console.log("Is 2 even? ", isHelwa(2));

array = [100, 200, 48, 3, 267, 10000, 233445]
console.log("My array, isn't she beautiful? ", array);

var result = array.map(isHelwa);
console.log("Are they all even? ", result);

var result = array.map(function(x){
  return x ** 0.5;
})
console.log("Squareroot of array: ", result);

//HTML output w/ jQuery
 // Your map results data
 var mapResults = "My map results here: " + result;

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);