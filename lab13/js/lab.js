// index.js - Lab 13: Loops
// Author: Helwa Halloum
// Date: 5/26/25

function fizzBuzz () {
  for (let i = 1; i <= 200; i++) {
  var str = '';

  if (i % 15 == 0) {
    console.log("FizzBuzz!");

     str += "FizzBuzz!";
  }

  else if (i % 21 == 0) {
    console.log("FizzBoom!");

    str += "FizzBoom!";
  }

  else if (i % 35 == 0) {
    console.log("BuzzBoom!");

    str += "BuzzBoom!";
  }



  else if (i % 7 == 0){
    console.log("Boom!")

    str += "Boom";
  }

  else if (i % 5 == 0) {
    console.log("Buzz!")

     str += "Buzz";
  }

  else if (i % 3 == 0) {
    console.log("Fizz!");

    str += "Fizz";
  }

  // task x: additional factor
  else if (i % 2 == 0) {
    console.log("Bangya!");

    str += "Bangya!";
  }

  else {
    console.log(i);

    str += i;
  }
  debugger;
  $("#output").append("<p>" + str + "</p>")
}

}
fizzBuzz();
