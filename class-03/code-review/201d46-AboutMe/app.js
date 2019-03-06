'use strict';

// ctrl + const;
// cmd + d;

// Asks the user a question with a prompt
var originCountry = prompt('Is my country of origin Lithuania?');

// Converts the answer to all lower case charecters
originCountry = originCountry.toLowerCase();
// originCountry = 'yes';
// var lowerCaseOriginCountry = originCountry.toLowerCase();

// My (correct) answer
var originCountryAns = 'no';

// Logs the correct answer and the user answer to console
console.log('On the country question, the user answered ' + originCountry + ', the correct answer is ' + originCountryAns);


// Checks if the answer is correct by comparing it to 'no' and 'n'
// If not checks if the answer is wrong by comparing to 'yes' and 'y'
// If neather is true, tells the user the correct way to answer
if (originCountry === originCountryAns || originCountry === 'n'){
  alert('Correct! My country of origin is Latvia');
}
else if (originCountry === 'yes' || originCountry === 'y'){
  alert('Sorry, but that\'s wrong. The country is Latvia');
}
else{
  alert('Please answer in the form of Yes or No');
}











// Asks the user a question with a prompt
var nationalCurrency = prompt('The currency used in Latvia is called the "Lat"');

// Converts the answer to all lower case charecters
nationalCurrency = nationalCurrency.toLowerCase();

// My (correct) answer
var nationalCurrencyAns = 'no';

// Logs the correct answer and the user answer to console
console.log('On the currency question, the user answered ' + nationalCurrency + ', the correct answer is ' + nationalCurrencyAns);


// Checks if the answer is correct by comparing it to 'no' and 'n'
// If not checks if the answer is wrong by comparing to 'yes' and 'y'
// If neather is true, tells the user the correct way to answer
if (nationalCurrency === nationalCurrencyAns || nationalCurrency === 'n'){
  alert('Correct! We switched to the Euro in 2014');
}
else if (nationalCurrency === 'yes' || nationalCurrency === 'y'){
  alert('Sorry, but that\'s wrong.  We switched to the Euro in 2014');
}
else{
  alert('Please answer in the form of Yes or No');
}










// Asks the user a question with a prompt
var hairColor = prompt('Is my hair color black');

// Converts the answer to all lower case charecters
hairColor = hairColor.toLowerCase();

// My (correct) answer
var hairColorAns = 'no';

// Logs the correct answer and the user answer to console
console.log('On the hair color question, the user answered ' + hairColor + ', the correct answer is ' + hairColorAns);


// Checks if the answer is correct by comparing it to 'no' and 'n'
// If not checks if the answer is wrong by comparing to 'yes' and 'y'
// If neather is true, tells the user the correct way to answer
if (hairColor === hairColorAns || hairColor === 'n'){
  alert('Correct! My hair ir brown');
}
else if (hairColor === 'yes' || hairColor === 'y'){
  alert('Sorry, but that\'s wrong.  My hair is brown');
}
else{
  alert('Please answer in the form of Yes or No');
}










// Asks the user a question with a prompt
var sport = prompt('Is my favorite sport basketball?');

// Converts the answer to all lower case charecters
sport = sport.toLowerCase();

// My (correct) answer
var sportAns = 'yes';

// Logs the correct answer and the user answer to console
console.log('On the sport question, the user answered ' + sport + ', the correct answer is ' + sportAns);


// Checks if the answer is correct by comparing it to 'yes' and 'y'
// If not checks if the answer is wrong by comparing to 'no' and 'n'
// If neather is true, tells the user the correct way to answer
if (sport === sportAns || sport === 'y'){
  alert('Correct! I strarted when i was 10 years old');
}
else if (sport === 'no' || sport === 'n'){
  alert('Sorry, but that\'s wrong.  I\'ve played since 10 years old');
}
else{
  alert('Please answer in the form of Yes or No');
}










// Asks the user a question with a prompt
var prefConsole = prompt('Do i preffer ps4 over xbox one?');

// Converts the answer to all lower case charecters
prefConsole = prefConsole.toLowerCase();

// My (correct) answer
var prefConsoleAns = 'yes';

// Logs the correct answer and the user answer to console
console.log('On the console question, the user answered ' + prefConsole + ', the correct answer is ' + prefConsoleAns);


// Checks if the answer is correct by comparing it to 'yes' and 'y'
// If not checks if the answer is wrong by comparing to 'no' and 'n'
// If neather is true, tells the user the correct way to answer
if (prefConsole === prefConsoleAns || prefConsole === 'y'){
  alert('Correct! I love my ps4');
}
else if (prefConsole === 'no' || prefConsole === 'n'){
  alert('Sorry, but that\'s wrong. I love my ps4');
}
else{
  alert('Please answer in the form of Yes or No');
}

