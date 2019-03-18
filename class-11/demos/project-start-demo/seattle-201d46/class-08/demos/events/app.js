'use strict';

// Basic syntax

// we need an element to target
var color_boxes = document.getElementById('color-boxes');

// we need a function to do work
function callback(){
  console.log('hello world');
}

// when an event type (click) happens on an element (section), fire off the callback function
color_boxes.addEventListener('click', callback);
// callback is sitting, ready to fire, waiting for a click to happen

// ==============================

// Basic syntax for handling an event

var first_div = document.getElementById('first');

var eventHandler = function(event){
  console.log(event.target);
  event.target.className = 'red';
};

first_div.addEventListener('click', eventHandler);
