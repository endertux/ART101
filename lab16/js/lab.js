// index.js - Lab 16: JSON and APIs
// Author: Helwa Halloum
// Date: 6/5/25

// Make the AJAX request to fetch the comic data
$.ajax({
  url: 'https://xkcd.com/614/info.0.json', 
  method: 'GET',
  dataType: 'json',
  success: function(comicObj) {
    // Store the object in a variable as requested
    var comicObj = comicObj;

    // container for comic
    var comicContainer = $('<section>').addClass('comic-section');

    // title
    var title = $('<h1>').text(comicObj.title);
    comicContainer.append(title);

    // add timage
    var comicImg = $('<img>')
      .attr('src', comicObj.img)
      .attr('alt', comicObj.alt)
      .attr('title', comicObj.alt);
    comicContainer.append(comicImg);

    $('body').append(comicContainer);
  },
  error: function(xhr, status, error) {
    console.error('Error fetching comic:', error);
  }
});