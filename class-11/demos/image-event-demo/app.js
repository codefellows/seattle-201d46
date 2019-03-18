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
var leftImage = document.getElementById('left_goat_img');
var rightImage = document.getElementById('right_goat_img');
var leftGoatThatIsOnThePage;
var rightGoatThatIsOnThePage;

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

var leftGoatDiv = document.getElementById('left_goat');

var rightGoatDiv = document.getElementById('right_goat');

//    randomly select an image(two images)
//    - random number generator - to pick the goat
//    - change the DOM
//    - Store the index of the last goat we put on the page

function handleClickOnLeftGoat(event){
  console.log('clicked on left goat');
  //increment total clicks
  likeCounter++;
  // increment left goat's clicks
  leftGoatThatIsOnThePage.clicks++;


  // pick a new 2 goats,
  var leftGoatIndex = Math.floor(Math.random() * allGoats.length);
  var rightGoatIndex =Math.floor( Math.random() * allGoats.length );

  leftGoatThatIsOnThePage = allGoats[leftGoatIndex];
  rightGoatThatIsOnThePage = allGoats[rightGoatIndex];

  // and put them on the page
  leftImage.src = leftGoatThatIsOnThePage.imageUrl;
  rightImage.src = rightGoatThatIsOnThePage.imageUrl;


  // stop after 10 clicks
  if(likeCounter > 9){
    // stop listening for clicks on the left and right goat
    leftGoatDiv.removeEventListener('click', handleClickOnLeftGoat);
    rightGoatDiv.removeEventListener('click', handleClickOnRightGoat);
  }
}

function handleClickOnRightGoat(event) {
  console.log('clicked on left goat');
  //increment total clicks
  likeCounter++;
  // increment right goat's clicks
  rightGoatThatIsOnThePage.clicks++;


  // pick a new 2 goats,
  var leftGoatIndex = Math.floor(Math.random() * allGoats.length);
  var rightGoatIndex = Math.floor(Math.random() * allGoats.length);

  leftGoatThatIsOnThePage = allGoats[leftGoatIndex];
  rightGoatThatIsOnThePage = allGoats[rightGoatIndex];

  // and put them on the page
  leftImage.src = leftGoatThatIsOnThePage.imageUrl;
  rightImage.src = rightGoatThatIsOnThePage.imageUrl;


  // stop after 10 clicks
  if (likeCounter > 9) {
    // stop listening for clicks on the left and right goat
    leftGoatDiv.removeEventListener('click', handleClickOnLeftGoat);
    rightGoatDiv.removeEventListener('click', handleClickOnRightGoat);
  }
}

leftGoatDiv.addEventListener('click', handleClickOnLeftGoat);

rightGoatDiv.addEventListener('click', handleClickOnRightGoat);

// Instantiate GoatImage objects
new GoatImage('./images/cruisin-goat.jpg', 'Cruisin Goat');
new GoatImage('./images/float-your-goat.jpg', 'Float Goat');
new GoatImage('./images/goat-out-of-hand.jpg', 'Hand Goat');
new GoatImage('./images/kissing-goat.jpg', 'Kiss Goat');
new GoatImage('./images/sassy-goat.jpg', 'Sass Goat');
new GoatImage('./images/smiling-goat.jpg', 'Smile Goat');
new GoatImage('./images/sweater-goat.jpg', 'Sweet Goat');

// When I first load the page, I need to know which goat is left and right, sso they can track their clicks in the javascript
leftGoatThatIsOnThePage = allGoats[6];
rightGoatThatIsOnThePage = allGoats[0];
