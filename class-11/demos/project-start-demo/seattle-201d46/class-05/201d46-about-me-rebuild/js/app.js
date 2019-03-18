'use strict';

/*
Conditions
  if answer is right or wrong

possible answers

Variables => things to compare

A question about board games

A question that loops until they give a correct answer

A question with hints

*/

//TODO: board game yes or no
// use a prompt to ask the question
// store it
// check it against right or wrong
// alert them to if they were correct

var questions_array = ['do I like sweaters?', 'am i a dumnb dumb', 'do I like coffee', 'am I a teacher'];
var answers_array =['yes', 'no', 'yes', 'yes'];
var question_responses = ['of course I like sweaters', 'ur a dumb dumb', 'it keeps me awake', 'im glad you can tell'];
var bad_question_responses = ['hey', 'no u r', 'havent you seen me drink it?', 'why are you in class then'];

var yesses = ['yes', 'Y', 'y', 'Yes', 'sure'];
var noooos = ['naw', 'N', 'no'];

var bad_answers_array = [noooos, yesses, noooos, ['naw', 'N', 'no']];

// for(var index = 0; index < questions_array.length; index++){
//   var sweaters = prompt(questions_array[index]);
//   if(sweaters === answers_array[index]){
//     alert('of course, next question.');
//   } else if(sweaters === bad_answers_array[index]){
//     alert('nope');
//   } else {
//     alert('try again');
//   }
//   console.log('given: '+ sweaters + ' correct: yes');
// }

for (var index = 0; index < questions_array.length; index++) {

  do {
    var sweaters = prompt(questions_array[index]);
  } while(!sweaters);

  //What I am expecting: '', null, 'yes' 'no' 'any other string'
  //While there is nothing truthy inside the var sweaters

  if (sweaters === answers_array[index]) {
    alert(question_responses[index]);

  // } else if (sweaters === bad_answers_array[index]) {
  }else if ( bad_answers_array[index].includes( sweaters ) ){
    // if( ['yes', 'y'] has 'y' inside it)

    alert(bad_question_responses[index]);
  } else {
    alert('try again');
  }
  console.log('given: ' + sweaters + ' correct: yes');
}

// var sweaters = prompt('do I like sweaters?');
// if(sweaters === 'yes'){
//   alert('of course, next question.');
// } else if(sweaters === 'no'){
//   alert('you grinch');
//   // console.log('given: ' + sweaters + ' correct: yes');
// } else {
//   alert('try again');
// }
// console.log('given: '+ sweaters + ' correct: yes');

// var coffee = prompt('do I like coffee?');
// if (coffee === 'yes') {
//   alert('of course, next question.');
// } else if (coffee === 'no') {
//   alert('to each his own');
// } else {
//   alert('try again');
// }
// console.log('given: ' + coffee + ' correct: yes');
//do this 5 times


// while loop until they answer correctly
// what if they cant get it right
// 15
// descriptive messages in the console

// Ask the question and get a response
// Birth month
// 12
//hot==within 1 month warm 2-3 cold 4-5 icy 6
// check how close they are and tell them one of the options
// complex switch
// arrays of possibilities
//month number
