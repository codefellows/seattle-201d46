'use strict';

// var enter;
// enter = alert ('Use a simple yes or no to answer these question');

// var question1 = prompt ('Is Williams a code Fellow student?');

// question1 = question1.toLowerCase();
// var questionYes = 'yes';
// var questionNo =  'no';

// console.log('cf student: ' + question1);

// if (question1 === questionYes) {
//   alert('Correct');
// }
// else if (question1 === questionNo) {
//   alert ('Nah buddy');
// }
// else {
//   alert('Try submitting a -yes- or -no- answer');

// }




// var sleep = prompt ('Did he have a goodnight sleep?');
// sleep = sleep.toLowerCase();

// console.log();


// if (sleep === questionYes){
//   alert('You bet I did');
// }
// else { (sleep === questionNo);
//   alert ('Nahhhh, I actually did');
// }
// console.log(sleep);



// var game = prompt ('Is playstion the right console?');
// game = game.toLowerCase();

// if (game === questionYes){
//   alert('LETTTSSSS GOOOO!');
// }
// else { (game === questionNo);
//   alert ('next question');
// }

// console.log(game);


// var wife = prompt ('Is he married to the hottest chick in the world');
// wife = wife.toLowerCase();

// if (wife === questionYes){
//   alert('Yesssss sir');
// }
// else { (wife === questionNo);
//   alert ('Quit playing with me');
// }
// console.log(wife);


// var last = prompt ('Is learning here fun? ');
// last = last.toLowerCase();
// if (last === questionYes){
//   alert('It really is');
// }
// else { (last === questionNo);
//   alert ('Get the strap');
// }
// console.log(last);


// Ask first qestion to user with a prompt//


// question 6, asking the user a question involing a number outcome, but they only get 4 trys//
//we use a for ststement to write properties for the question aka prompt//
//within the for statement, i used a if and else statement to loop the question till they//
//they got it right.//

// for (var i = 0; i < 4; i++){
//   var six = prompt('What day of the month is my birthday?');
//   if (six === '24' ){
//     alert ('AYYYY you got it right ::)');
//     // i = 4;
//     break;
//   }

//   if(six === '25' || six === '23'){
//     alert('you were so close');
//     continue;
//   }

//   alert ('try again');
// }

// alert('you took ' + ++i + ' tries');
console.log();
// using a console log to send the call the code//


// question 7, asking the user a question with multiple answers//
// Should use a 'while' or 'for' statement, gonna use a 'for' state//
//the for statement is gonna ask when to start, how long, and change//

var guessed_florida = false; // because they havent guessed florida correct yet
var guessed_washington = false; // because they havent guessed wa correct yet


// for (var i = 0; i < 4; i++){
//   var seven = prompt('What states have I lived in?');
//   seven = seven.toLowerCase();
//   // if their guess is florida and they have not guessed florida yet
//   if (seven === 'florida' && guessed_florida === false){
//     alert ('Ay thats one, Whats the other?)');
//     guessed_florida = true;

//   } else if(seven === 'washington' && guessed_washington === false){
//     alert('Ay thats one, Whats the other?)');
//     guessed_washington = true;

//   }

//   else if ( seven === 'florida and washington' )
//   {
//     alert ('That\'s RIGHT!, How\'d the hell did you guess that?');
//     i = 4;
//   }
//   else {
//     alert('try again');
//   }

//   if(guessed_florida && guessed_washington){
//     alert('you guessed them both right');
//     break;
//   }
// }

var answers = ['florida', 'washington', 'california', 'hawaii']; // next level 2d
// DONE:If the user guesses something they already guessed, tell them they are a cheater
var past_correct_guesses = [];
var guesses = 6;
var answered_correct = false;

// while I have guesses left && the user has not answered correctly (answered_correct would === true)
while(guesses > 0 && answered_correct === false){ //every single guess
  var state_lived_in = prompt('You have ' + guesses + ' guesses left, answer with a state name, What is a state I have lived in before');
  var is_a_cheater = false;

  //DONE: are they a cheater ex: check florida twice
  for(var k = 0; k < past_correct_guesses.length; k++){
    if (state_lived_in === past_correct_guesses[k]) { //right now this checks the first cheating guess
      is_a_cheater = true;
    }
  }

  //DONE: dont check florida again
  //TODO: check washington
  for(var j = 0; j < answers.length; j++){ //check every single answer
    //check for correct answer
    if (state_lived_in === answers[j] && is_a_cheater === false) {
      alert('nice work, you have 1 more state to find');
      past_correct_guesses.push(state_lived_in);
      guesses--;
    }
  }

  if(is_a_cheater){ //just saying they are a cheater
    alert('f u cheater');
    guesses -= 2;
  }
  // else {
  //   alert('nope, try again');
  //   guesses--;
  // }

}

console.log();

