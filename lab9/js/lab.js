// index.js - Lab 10: JavaScript for the Web
// Author: Helwa Halloum
// Date: 5/14/25

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