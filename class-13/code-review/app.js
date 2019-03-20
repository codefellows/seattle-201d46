'use strict';

// Track 5 clicks


/*
  Track the images in js
  // array to hold things
  Constructor
    name
    click_count
    appeared_count
    url (src)

    // on a click
  switch to new images ** led me to the constructor
    - non duplication
    - tracking the clicks
    - tracking how many times the new images have appeared
*/

// Global Variables
var allMarketSurveyItems = [];
var totalClicks = 0;





//DOM References
var leftImage = document.getElementById('image1');
var middleImage = document.getElementById('image2');
var rightImage = document.getElementById('image3');
var imageSection = document.getElementById('busmall-images');





// Constructor
function MarketSurveyItem (name, src ){
  this.name = name;
  this.clickCount = 0;
  this.appeared = 0;
  this.src = src;

  allMarketSurveyItems.push(this);
}


function pickThreeImagesAndIncrementAppeared(){
  var leftIndex = Math.floor(Math.random() * allMarketSurveyItems.length);
  var middleIndex = Math.floor(Math.random() * allMarketSurveyItems.length);
  var rightIndex = Math.floor(Math.random() * allMarketSurveyItems.length);

  allMarketSurveyItems[leftIndex].appeared++;
  allMarketSurveyItems[middleIndex].appeared++;
  allMarketSurveyItems[rightIndex].appeared++;

  leftImage.src = allMarketSurveyItems[leftIndex].src;
  middleImage.src = allMarketSurveyItems[middleIndex].src;
  rightImage.src = allMarketSurveyItems[rightIndex].src;
}






// Helpers and Handlers
function handleClickOnImage (clickEvent){
  if(event.target.tagName !== 'IMG'){
    console.log('click on an image');
    return;
  }

  totalClicks++;
  //figure out which image was clicked
  // This broke if i didnt click on an image
  // Do this for all images

  for( var i = 0; i < allMarketSurveyItems.length; i++){
    if(event.target.src.includes(allMarketSurveyItems[i].src)){
      console.log(`${allMarketSurveyItems[i].name} was picked`);
      allMarketSurveyItems[i].clickCount++;
    }
  }

  pickThreeImagesAndIncrementAppeared();
  // check if i have clicked 5 times, then put the chart on
  if(totalClicks > 4){
    buildMyChart();
  }

}

// Chartjs
function buildMyChart(){

  var ctx = document.getElementById('myChart').getContext('2d');

  var labels = [];
  var data = [];
  for(var i = 0; i < allMarketSurveyItems.length; i++){
    labels.push(allMarketSurveyItems[i].name);
    data.push(Math.floor(100 *allMarketSurveyItems[i].clickCount / allMarketSurveyItems[i].appeared));
  }


  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}






//Instantiating the page

new MarketSurveyItem('bag', 'images/bag.jpg');
new MarketSurveyItem('chair', 'images/chair.jpg');
new MarketSurveyItem('dog duck', 'images/dog-duck.jpg');
new MarketSurveyItem('pen', 'images/pen.jpg');
new MarketSurveyItem('usb', 'images/usb.jpg');
new MarketSurveyItem('unicorn', 'images/unicorn.jpg');

imageSection.addEventListener('click', handleClickOnImage);

pickThreeImagesAndIncrementAppeared();
