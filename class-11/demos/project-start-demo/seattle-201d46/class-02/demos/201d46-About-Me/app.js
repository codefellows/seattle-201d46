'use strict';

var favorite_color = prompt('is nicholas\'s favorite color red');

var favorite_color_correct_answer = 'no';

// if(favorite_color === favorite_color_correct_answer){
//   alert('nice guess');
// } else {
//   alert('nope');
// }


// two pipes '||' is logical or
// two ampersands '&&' is logical and

if (favorite_color === 'N' || favorite_color === 'n'){
  alert('you guessed N');
} else if (favorite_color === 'maybe'){
  alert('well isnt that cheeky');
} else {
  alert('no way');
}

// basic syntax for an if
// if ( some condition ) {
//  some code to be executed if condition is true
//} <optional> else {
// some code to be executed if condition is not ture
//}
