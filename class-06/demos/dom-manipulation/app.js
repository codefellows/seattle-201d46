'use strict';

// Getters : Methods used for getting the javascript elements in the DOM
/*
document.getElementById('some_id') returns a single element with the id('some_id')
document.getElementsByClassName('some_class_name') returns an array of elements with the classname 'some_class_name
document.getElementsByTagName('P') // returns an array of all elements that are p tags
document.querySelectorAll('some css shiznizz') // returns an array of whatever the css would have targeted

*/
// js represntations of Dom ojects are called elements
// we can modify their properties
var title = document.getElementById('big-ol-header'); // *****
title.innerHTML = 'Nicholas Rules';
console.log(title.innerHTML);

// Elements

// just because we create an element, doesn't mean it gets added to the DOM
var new_p_element = document.createElement('p');
new_p_element.textContent = 'This is a new p tag';
console.log(new_p_element);

// Add things to the DOM

// Find a parent container
// create an element
// give that element content
// append that element to the parent

var parent_container = document.getElementById('student-container'); // empty ul;

var new_list_item_element = document.createElement('li');
// empty list item;

new_list_item_element.textContent = 'Joseph';
// <li>Joseph</li>

parent_container.appendChild(new_list_item_element);
//append child adds an element to another element (as a child)


var new_list_item_element_2 = document.createElement('li');
// empty list item;

new_list_item_element_2.textContent = 'Richard';
// <li>Richard</li>

parent_container.appendChild(new_list_item_element_2);
//append child adds an element to another element (as a child)
