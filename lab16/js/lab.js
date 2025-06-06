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

    // Create a container for the comic
    var comicContainer = $('<section>').addClass('comic-section');

    // Add the title
    var title = $('<h1>').text(comicObj.title);
    comicContainer.append(title);

    // Create and add the image
    var comicImg = $('<img>')
      .attr('src', comicObj.img)
      .attr('alt', comicObj.alt)
      .attr('title', comicObj.alt);
    comicContainer.append(comicImg);

    // Add the container to the webpage (you might want to specify where)
    $('body').append(comicContainer); // Or use another selector like $('#comics-container')
  },
  error: function(xhr, status, error) {
    console.error('Error fetching comic:', error);
  }
});