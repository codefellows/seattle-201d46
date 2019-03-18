'use strict';
// Tracks favorite goat click counts
/*
counter for number of clicks
where are the images stored= variable with path to image
  ie: var cruisin = './images/cruisin-goat.jpg'
  XX array of 10 images ['cruisin.jpg', 'float.jpg', etc]
  XX array of clicks [1, 2, 0]
  Constructor function for goats
  Refactored to: array of goat objects
    - [{GOAT}, {GOAT}]
    - goat object:
    {image_url: 'cruisin.jpg,
    clicks: 0,
    name: 'cruisin around'
  }

-listen for an event('click')
  while(votes < 10)
  randomly select an image (two images)
    -random number generator- to pick the goat
    - change the DOM
  - increment the amount of clicks on the clicked goat
    - Store the index of the last goat we put on the page

Stretch: start with random goats
*/


// Global vars
// Counter for num of clicks
var likeCounter = 0;
var allGoats = [];

// =======================================
// Constructors
// =======================================

var GoatImage = function(url, name){
  this.imageUrl = url;
  this.name = name;
  this.clicks = 0;

  allGoats.push(this);
};

// ===================================
// Initialize the Page
// ===================================

var leftGoatImage = document.getElementById('left_goat');

var rightGoatImage = document.getElementById('right_goat');

function handleClickOnLeftGoat(event){
  // increment left goat's clicks
  console.log('clicked on left goat');
}

function handleClickOnRightGoat(event) {
  // increment left goat's clicks
  console.log('clicked on right goat');
}

leftGoatImage.addEventListener('click', handleClickOnLeftGoat);

rightGoatImage.addEventListener('click', handleClickOnRightGoat);

// Instantiate GoatImage objects
new GoatImage('cruisin-goat.jpg', 'Cruisin Goat');
new GoatImage('float-your-goat.jpg', 'Float Goat');
new GoatImage('goat-out-of-hand.jpg', 'Hand Goat');
new GoatImage('kissing-goat.jpg', 'Kiss Goat');
new GoatImage('sassy-goat.jpg', 'Sass Goat');
new GoatImage('smiling-goat.jpg', 'Smile Goat');
new GoatImage('sweater-goat.jpg', 'Sweet Goat');

