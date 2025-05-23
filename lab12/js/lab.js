// index.js - sorting hat for lab 12: conditionals
// Author: Helwa Halloum
// Date: 5/22/25

function sortingHat(str) {
  let length = str.length;
  let mod = str.length % 4;

  if (mod ==0) {
    return ["Gryffindor", " You're the main character."]

  }
  else if (mod ==1) {
    return ["Slytherin", " Your peers will hate you."]
  }
  else if (mod ==2) {
    return ["Hufflepuff", " I'm sorry."]
  }
  else if (mod ==3) {
    return ["Ravenclaw", " People sorted into here have brains."]
  }
}

// click listener for button
$("#button").click(function(){
  // get value of input field
  const name = $("#input").val();

  // now let's sort it
  const house = sortingHat(name);

  // append a new div to our output div
  $("#output").html("You have been sorted into:" + '<div class="text"><p>' + house + '</p></div>');
  console.log("click")
});