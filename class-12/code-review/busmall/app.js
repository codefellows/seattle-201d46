'use strict';

/*
PLANNING

Store images
  Constructor function
  Array of image objects

Listen for event ('click')
  Less than 25 clicks/selections
  Randomly generate 3 images
    Random number generator?
    Not repeat earlier images/currently displayed images
    Display new images
  Increment amount of clicks
    Store index of last image

*/

//Create an object for all the objects we have so can refer
//Array: function to iterate through.

//--------- Global variables --------
var clicks = 0;
var allProducts = [];
// var leftImageOnThisPage;
// var centerImageOnThisPage;

var currentImg;
var imgOnPage = [];
var previousLeftImage; //bag
var previousCenterImage; //banana
var previousRightImage;

// DOM references document object model (looks like html)
var productList = document.getElementById('product-list');
var leftImg = document.getElementById('img-left');
var centerImg = document.getElementById('img-center');
var rightImg = document.getElementById('img-right');

imgOnPage.push(leftImg);
imgOnPage.push(centerImg);
imgOnPage.push(rightImg);

//--------- Constructor function --------
var Product = function(name, filePath, description){
  this.name = name;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.description = description;
  allProducts.push(this);
};

//--------- Add list to page ----------

function renderList (){
  for (var m in allProducts){
    var listItem = document.createElement('li');
    listItem.textContent = allProducts[m].timesClicked + ' votes for ' + allProducts[m].description;
    productList.appendChild(listItem);
  }
}

//--------- Event Listener --------





function handleClick(event){
  //logs number of clicks
  clicks++;
  // console.log('clicks no: ' + clicks);
  // console.log(event.target);

  //Iterates through all Products and adds timesClicked if it matches
  for (var k = 0; k < allProducts.length; k++){
    if (event.target.name === allProducts[k].name){
      allProducts[k].timesClicked++;
    }
  }

  // Set up temporary variables to store my newly picked pictures
  var tempLeft;
  var tempCenter;
  var tempRight;

  for (var i = 0; i < imgOnPage.length; i++){

    //Selects next random image
    var imgIndex = Math.floor(Math.random() * allProducts.length);
    //Loop to make sure that the new image selected is not the same as previous image
    // TODO: check against all previous pictures
    while (
      // eslint-disable-next-line no-trailing-spaces
      allProducts[imgIndex].name === previousLeftImage.name 
      // eslint-disable-next-line no-trailing-spaces
      || allProducts[imgIndex].name === previousCenterImage.name 
      // eslint-disable-next-line no-trailing-spaces
      || allProducts[imgIndex].name === previousRightImage.name
      // eslint-disable-next-line no-trailing-spaces
      || tempLeft === allProducts[imgIndex] 
      // eslint-disable-next-line no-trailing-spaces
      || tempCenter === allProducts[imgIndex]
      // eslint-disable-next-line no-trailing-spaces
      || tempRight === allProducts[imgIndex]
    ){ //can add more conditions to this while loop so that it doesn't come up with the same image as the other two either
      console.log(allProducts[imgIndex].name);
      imgIndex = Math.floor(Math.random() * allProducts.length);
    }

    // console.log(allProducts[imgIndex].name);
    currentImg = allProducts[imgIndex];
    imgOnPage[i].src = currentImg.filePath;
    imgOnPage[i].name = currentImg.name;

    //Logs number of times this image appears
    currentImg.timesShown++;
    // console.log(leftImageOnThisPage);

    //TODO: refactor
    if(i === 0){
      tempLeft = currentImg;
    }
    if(i === 1){
      tempCenter = currentImg;
    }
    if(i === 2){
      tempRight = currentImg;
    }

    if (clicks > 9){
      imgOnPage[i].removeEventListener('click', handleClick);
      renderList();
    }
  } // Pick a new 'unique' image- the last image on the page is reassigned to the new image

  previousLeftImage = tempLeft;
  previousCenterImage = tempCenter;
  previousRightImage = tempRight;
}

leftImg.addEventListener('click', handleClick);
centerImg.addEventListener('click', handleClick);
// rightImg.addEventListener('click', handleClick);

//--------- Instantiate new objects --------
new Product('bag', 'img/bag.jpg', 'R2D2 bag');
new Product('banana', 'img/banana.jpg', 'Banana slicer');
new Product('bathroom', 'img/bathroom.jpg', 'Bathroom iPad stand');
new Product('boots', 'img/boots.jpg', 'Open-toed boots');
new Product('breakfast', 'img/breakfast.jpg', 'Breakfast maker');
new Product('bubblegum', 'img/bubblegum.jpg', 'Meatball bubblegum');

// After I declare my products, set up which is on the page
previousLeftImage = allProducts[0];
previousCenterImage = allProducts[1];
previousRightImage = allProducts[2];

//CODE I DID THAT WORKED BUT WAS TOO COMPLICATED SO I NEED TO WORK ON OTHER THINGS FIRST

// var leftImg = document.getElementById('img-left');
// var centerImg = document.getElementById('img-center');
// var rightImg = document.getElementById('img-right');

// var imgOnPage = [leftImg, centerImg, rightImg];
// var currentImg;
// // var productSelected = [];

// function handleClick (event){
//   clicks++;
//   // currentImg.timesClicked++;
//   console.log('user has had ' + clicks + ' clicks.');
//   // console.log(currentImg);
//   // console.log('left image clicked');

//   for (var i = 0; i < imgOnPage.length; i++){
//     var imgIndex = Math.floor(Math.random() * allProducts.length);
//     currentImg = allProducts[imgIndex];
//     imgOnPage[i].src = currentImg.filePath;
//     currentImg.timesShown++;
//     console.log(currentImg);

//     if (clicks > 24){
//       imgOnPage[i].removeEventListener('click', handleClick);
//     }
//   }

//   // //selects random images
//   // var imgIndex = Math.floor(Math.random() * allProducts.length);
//   // var centerImgIndex = Math.floor(Math.random() * allProducts.length);
//   // var rightImgIndex = Math.floor(Math.random() * allProducts.length);

//   // //changes left image to new display image
//   // leftImageOnThisPage = allProducts[leftImgIndex];
//   // centerImageOnThisPage = allProducts[centerImgIndex];
//   // rightImageOnThisPage = allProducts[rightImgIndex];

//   // leftImg.src = leftImageOnThisPage.filePath;
//   // centerImg.src = centerImageOnThisPage.filePath;
//   // rightImg.src = rightImageOnThisPage.filePath;

//   // if (clicks > 24){
//   //   leftImg.removeEventListener('click', handleClick);
//   //   leftImg.removeEventListener('click', handleClick);
//   //   leftImg.removeEventListener('click', handleClick);
//   // }
// }

