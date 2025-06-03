// index.js - Lab 15
// Author: Helwa Halloum
// Date: 6/2/25

$("#activate").click(function() {
  $.ajax({
    url: "https://yesno.wtf/api",
    data: {
      id: 123,
      api_key: "blahblahblah",
    },
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
        let answer = data.answer;
        let imgURL = data.image;
        let imageHTML = "<img src = '" + imgURL + "'>";

        $("#output").html("<h4>" + answer);
        $("#output").append(imageHTML);
    },
    error: function (jqXHR, testStatus, errorThrown) {
      console.log("Error: ", testStatus, errorThrown);
    }
  });
});