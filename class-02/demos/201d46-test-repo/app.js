'use strict';

var stringNum = '2';

var numNum = 2;

//strict equals
console.log(stringNum === numNum);

// loose equals
console.log(stringNum == numNum);

// console.log( 5 + '10');

/*
Data Types
array []
String ''
boolean true, false
Number 5
Object {}
undefined 'our enemy'
null 'our friend'

*/

// 5 => 3 //happy to be greater than, alligator eating
// 5 =< 3 //sad to be less than, alligator eating

//Syntax for an array is [ value, value2 ]
// Empty array []
var emptyArr = [];
var numArr = [1, 2, 3, 4];
var stringArr = ['hi', 'I', 'am', 'cool'];

console.log(stringArr);
console.log(stringArr[0]);

// Pull an index out of an array is with ['cool'][index]
// ['cool'][0] => 'cool'
// [5, 9, 10][2] => 10

var allArr = [1, {}, 'cool', [2, 5]];

console.log(allArr);

var index = 3;

console.log(allArr[index]);

// allArr => [1, {}, 'cool', [2, 5]][index]
// allArr => [1, {}, 'cool', [2, 5]][3]








