'use strict';

var clickCount = localStorage.getItem('clicksInLocalStorage');
var clicky = document.getElementById('click-tracking');
clicky.textContent = `clicked ${clickCount} times`;


clicky.addEventListener('click', function(){
  clickCount++;
  localStorage.setItem('clicksInLocalStorage', clickCount);
  clicky.textContent = `clicked ${clickCount} times`;
});


// LS
// Setters
// localStorage.setItem(<key>, <value>)
// localStorage.setItem('key', 'values');
// localStorage.setItem('property', 'hello');
// localStorage.setItem('nicholas', true);

// Getters
// I want to retrieve something from localStorage
// localStorage.getItem(<key>)
localStorage.getItem('key'); // => 'values'
localStorage.getItem('property'); // => 'hello'
localStorage.getItem('nicholas'); // => true
//If the item is not in localStorage, it will return null
localStorage.getItem('ImNotInLocalStorage');// => null



// If I want to save an object or array or another non primitive value
// I must first convert it to JSON
// JSON
// Javascript string object notation
// Makes data smaller
// makes it uniform
// JSON.stringify
var someObject = {
  name: 'nicholas',
  isTeacher: true,
  class: [{name: 'students'}, {name:'otherStudent'}]
};

//turn it into a string
var stringyObject = JSON.stringify(someObject);

//set it in local Storage
// localStorage.setItem('nicholasObject', stringyObject);

// Now I want my Stringy Object back out of Local Storage
var gotItFromLS = localStorage.getItem('nicholasObject');
console.log(gotItFromLS);

// If we want to parse or unstringy our object
// JSON.parse
//I want to unString
var parsedFromLS = JSON.parse(gotItFromLS);
console.log(parsedFromLS);























// These are not uniform data
var similarA = {
  'hey':2
};
var similarB = {hey:  2};


