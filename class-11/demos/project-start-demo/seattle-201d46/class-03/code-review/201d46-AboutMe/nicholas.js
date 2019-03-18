'use strict';

// alert('hello world');

// yes and no game with 2 questions

// how many christmas sweaters do I have, yes?
/*
yes
  of course he does
no
  please say yes
too many
  you know me too well
catch all
  talk about christmas sweaters, it would mean a lot to me
*/

alert('Welcome to my site, I am giving you two yes or no questions, please answer in the form of Yes/Y or No/N');

var sweaters = prompt('do I have more than 5 christmas sweaters');

var lowerSweaters = sweaters.toLowerCase();
var upperSweaters = sweaters.toUpperCase();
// sweaters.toLowerCase();
if( upperSweaters === 'YES'){
  alert('respond thats a lot of sweaters');
} else if(upperSweaters === 'NO'){
  alert('you are silly');
} else {
  alert('please answer the question');
}

// are you from planet Earth
