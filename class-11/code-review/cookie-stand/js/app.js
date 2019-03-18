'use strict';

//function to store the user's color scheme selection in session storage
//persisting a value using session storage found on Stack Overflow: https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads/30070207#30070207
function set_color_scheme(event) {
  sessionStorage.setItem('theme', event.target.value);
  location.reload();
}

//if on the main page, this variable will store a value, otherwise it will be null
var main_page = document.getElementById('main-page');
console.log(main_page);

//get and store the HTML element that contains the link to the CSS style sheet
var pages = document.getElementsByClassName('theme-sheet');
console.log(pages);

//if on the sales page, this variable will store the HTML element containing the fish picture there
var fish_pic = document.getElementById('fish');
console.log(fish_pic);

//if session storage has a selection value stored in it, set the corresponding theme for all pages
//currently there are three choices: standard salmon, greyscale, and ocean
if (sessionStorage.getItem('theme')) {
  switch (sessionStorage.getItem('theme')) {
  //normal is the standard salmon colors
  case 'normal':
    //check if on the main page or not
    //set path for style sheet accordingly
    //repeated for each case
    if (main_page) {
      pages[0].innerHTML = '<link rel="stylesheet" href="./css/style.css" class="theme-sheet">';
    } else {
      pages[0].innerHTML = '<link rel="stylesheet" href="../css/style.css" class="theme-sheet">';
    }
    break;
  case 'greyscale':
    if (main_page) {
      pages[0].innerHTML = '<link rel="stylesheet" href="./css/greyscale.css" class="theme-sheet">';
    } else {
      pages[0].innerHTML = '<link rel="stylesheet" href="../css/greyscale.css" class="theme-sheet">';
    }
    break;
  case 'ocean':
    if (main_page) {
      var css_to_change = document.getElementById('css-to-change');
      css_to_change.href = './css/ocean.css';
      // pages[0].innerHTML = '<link rel="stylesheet" href="./css/ocean.css" class="theme-sheet">';
    } else {
      pages[0].innerHTML = '<link rel="stylesheet" href="../css/ocean.css" class="theme-sheet">';
    }
    break;
  }
}

//if on the sales page, set the path to the version of the chinook image that has the correct background color
if (fish_pic) {
  switch (sessionStorage.getItem('theme')) {
  case 'normal':
    fish_pic.innerHTML = '';
    fish_pic.innerHTML = '<img src="../img/chinook.jpg">';
    break;
  case 'greyscale':
    fish_pic.innerHTML = '';
    fish_pic.innerHTML = '<img src="../img/chinook_greyscale.jpg">';
    break;
  case 'ocean':
    fish_pic.innerHTML = '';
    fish_pic.innerHTML = '<img src="../img/chinook_ocean.jpg">';
    break;
  }
}

//get and store the HTML element
//'select' style drop-down list of color schemes
var theme = document.getElementById('themes');

//when the user selects a color scheme, save their selection into session storage using the set_color_scheme function
theme.addEventListener('change', set_color_scheme);
