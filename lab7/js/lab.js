// index.js - Lab 7: Functions
// Author: Helwa Halloum
// Date: 5/2/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function shuffleUserName () {
  // some code here
  var userName = window.prompt("Want to see something cool? Type your name.");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  
  return nameSorted;
}

// output
document.writeln("Now this is epic: ", 
  sortUserName(), "</br>");