'use strict';

var jon = {
  name: 'Jon',
  interest: 'painting',
  favorite_movie: 'cloud atlas',
};

jon.introduce_myself = function () {
  var message = `Hi my name is ${this.name} my favorite movie is ${this.favorite_movie}, I love ${this.interest}.`;
  console.log(message);
};

jon.introduce_myself();

// needs parameters to collect the properties I want on the object
function Student(name, interest, favorite_movie){
  this.name = name;
  this.interest = interest;
  this.favorite_movie = favorite_movie;
  this.introduce_myself = function () {
    var message = `Hi my name is ${this.name} my favorite movie is ${this.favorite_movie}, I love ${this.interest}.`;
    console.log(message);
  };
  this.is_in_nicks_class = true;
}

// Constructor.prototype.method is the syntax used to attach a method to all future newly instantiated objects
Student.prototype.hello = function(){
  console.log('hi');
};

// when we call a constructor function with the "new" keyword, we say we are instantiating a new "Student" <constructor name> Object
var enrico = new Student('enrico', 'football', 'top gun');
var joanna = new Student('joanna', 'snowboarding', 'ameli');

console.log(jon);
console.log(enrico);
console.log(joanna);

// Function signature of a constructor

//Not the actual code, but essentially what we are trying to do;
// function(propertyName, keyName, thingAboutTheObject){
//   // in order to tie them to the object
//   var some_new_object = {};

//   some_new_object.propertyName = propertyName;
//   some_new_object.keyName = keyName;
//   some_new_object.thingAboutTheObject = thingAboutTheObject;

//   return some_new_object;
// }

var ConstructorName = function (key, prop, anything, parameter) {
  //this = {};
  this.key = key;
  this.prop = prop;
  this.double_anything = anything * 2;
  this.parameter = parameter;
  // return this
};

// All because of the "new" keyword
var newConstructedObject = new ConstructorName(1, 'coolio', [1, 2, 3]);

console.log(newConstructedObject);


// ===============================================

var schoolBus = {
  type: 'schoolbus',
  color: 'yellow',
  wheels: 4,
  go_vroom: function(){}
};

function Bus(type, color){
  this.type = type;
  this.color = color;
  this.wheels = 4;
}

Bus.prototype.go_vroom = function(){};

var ginger = {
  name: 'ginger',
  breed: 'golden-doodle',
  cute: true,
  bark: function(){},
  toys: [],
};

function Puppy (name, breed, cute, toys){
  this.is_cute = cute;
  this.name = name;
  this.breed = breed;

  this.toys = toys;
}

Puppy.prototype.bark = function(){};

// instantiating objects
var gingers_toys = ['bone', 'chewtthing'];
var ginger = new Puppy ('ginger', 'golden-doodle', true, gingers_toys);
var wallace = new Puppy('wallace', 'old english sheepdog', true, ['ball']);

console.log(ginger);
console.log(wallace);




