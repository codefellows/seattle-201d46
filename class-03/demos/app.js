'use strict';

var loose_equal = 2 == '2'; // true
var not_equal = 2 != '2'; // false
var strict_equal = 2 === '2'; // false
var strict_not_equal = 2 !== '2'; // true
var greater_than = 5 > 3; //true
var less_than = 5 < 3; //false
var gr_or_equal = 3 >= 3; //true
var less_or_equal = 3 <= 3; //true


var comparisons = [loose_equal, not_equal, strict_equal, strict_not_equal, greater_than, less_than, gr_or_equal, less_or_equal];

// loose_equal = 'look at me';

// console.log(comparisons);

//For Loop Syntax
// for(var index = 0; index < 10; index = index + 1){
//   console.log(index);
// }

// for(var i = 0; i < 10; i++){
//   console.log(i);
// }

//for(var i = 0; i < some_array.length; i++){ // hits every item of the array
// do somehting to the array[i]
//}

var ice_creams = ['rocky-road', 'chocolate-overload', 'chocolate chocolate with chocolate fudge', 'coffee', 'lemon sorbet', 'pistachio', 'bourb0n pecan praline', 'cookies and cream', 'fudge'];
// console.log(ice_creams);

for(var i = 0; i < ice_creams.length; i++){
  // console.log(i);
  // console.log(ice_creams[i]);
}

// basic syntax for while loop

// while(conditional expression){
//   do the thing
// }

var user_response = prompt('give me an answer');

// while(user_response === '' || user_response === null){
//   // alert('give me an answer');
//   user_response = prompt('i said give me an answer');
// }

var favorite_ice_cream;

// do {
//   favorite_ice_cream = prompt('what is your favorite ice cream');
// }while(favorite_ice_cream === '' || favorite_ice_cream === null);
// while(true){
//   console.log('hi');
// }

// var fav_color = prompt('what is your fav color');

// switch(fav_color){
// case 'red' :
//   alert('I love red');
//   alert('say something else');
//   break;
// case 'blue' :
//   alert('blue sux');
//   break;
// case 'green' :
//   alert('do you like hiking');
//   break;
// default :
//   alert('I don\'t know that color');
//   break;
// }


// Question that accepts a number
// see if answer was too high or too low
// ask again
// limited number of guesses

// prompt the user for a guess
// check if user is right
// while the guess is too low or high, ask again
// check if user writes a number

var guesses = 0;
var number = prompt('guess how many christmas sweaters I have'); //stretch goal
guesses++;

while((number > 8 || number < 8) && guesses < 3){
  if(number > 8) {
    alert('too high');
  }
  number = prompt('guess again');
  guesses++;
}

if(guesses < 3) {
  alert('great job');
} else {
  alert('bad job');
}
