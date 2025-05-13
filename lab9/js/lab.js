// index.js - Lab 9: Libraries & jQuery
// Author: Helwa Halloum
// Date: 5/12/25

// add button to challenge section of page
 //$("#challenge").append("<button id='button-challenge'>Make Special</button>");
//$("#challenge").append("Text here");

// add click listener to challange button
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});

$("#button-reflections").click(function(){
  $("#reflections").toggleClass("special");
});

$("#button-results").click(function(){
  $("#results").toggleClass("special");
});