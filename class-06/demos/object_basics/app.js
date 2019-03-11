'use strict';


//What is an object
// Powerful way to group properties of things and the things we can do with them;
// Similar to arrays except instead of storing data at an index (0, 1, 2, 3)
// We store the data at a key ('name', 'height', 'goes_bowling_sometimes')

// name:nicholas === key:value pair
// name:nicholas === property
// teach_class === method// a function inside an object is a method, it is also a key value pair, and also a property, but we call it method for clarity

var nicholas = {
  key: 'value', // all properties are separated by commas
  height: '6\'2.5',
  name: 'nicholas',
  teaches: true,
  teach_class: function(){
    console.log('This is my favorite lesson!');
  }
};

var nicholas_array = ['value', '6\'2.5', 'nicholas', true];

// console.log(nicholas);
// console.log(nicholas_array);

var array_like_object = {
  0: 'hello',
  1: 'I am so cool',
  2: 2,
  3: 'I look like an array don\'t I'
};

// console.log(array_like_object);
// We can access objects just like arrays with bracket [] notation

var anything = 'height';
nicholas['name'] === 'nicholas';
nicholas[anything] === '6\'2.5';

// we can access objects with dot "." notation as well

nicholas.name === 'nicholas';
nicholas.height === '6\'2.5';

// ========================================================

var empty_object = {};
var one_line_object = {'a' : 1, b : 99, c : [1,2,3]};

//the indeces of an array are also strings
// all keys in objects are strings

var generic_object = {
  key1: 'value1',
  // <'key2' : 2,> the entire key value pair in the <> is a property
  'method1': function(){
    console.log('some thing');
    return 5;
  },
  'multi word key': 5
};

// multi word keys must be accessed with bracker [] notation so that you can write the spaces

generic_object['multi word key'];
// generic_object.multi word key // will break


//We can use dot or bracket notation to access, modify, or add properties (and methods);
var morgana = {
  name: 'morgana',
  fav_color: 'blue'
};
console.log(morgana);
morgana.fav_color = 'orange';
console.log(morgana);
morgana['fun_fact'] = 'favorite costume term chapereone de liripe';
console.log(morgana);

//delete keyword removes a property altogether
delete morgana.fav_color;
console.log(morgana);

// morgana.fav_color = 'red';
// console.log(morgana);

//THIS (contextual this);
// contextual this points back at the object a method is called from;
// in says_their_own_name, contextual this points at the 'nicholas' object

nicholas.says_their_own_name = function(){
  console.log('my name is ' + this.name);
  console.log('my height is ' + nicholas.height);
};

nicholas.says_their_own_name();
