// Declare a variable and assign it a number
var x = 2;

//declare a function expression
function doThings(){
//things
}

//function declaration
var doOtherThings = function (){
  //things
};

//function with parameters
function iHaveParameters(parameter1, parameter2, x, y){
  return x + y + parameter1 + parameter2;
}

// Array
var array = [1,2, {}, []];

// Object Literal
var objectLiteral = {
  key : 'key',
  parameter : 'parameter',
  property : 6 * 2,
  x : x * x * x,
  array : [],
  object : {},
  arrayOfArrays : [[[], []], [], []],
  boolean : true,
  method : function () {
    //things
  },
  otherMethod : iHaveParameters, // i am defining a method
  returnedFunction : iHaveParameters(1, 2, 3, 4), //calls the function, and assigns the return to the property (10)
};

objectLiteral.addTheThings = function(){
  //things
};

// Constructor Functions
function CapitalLetterConstructor(parameter, key, property, x){
  this.key = key;
  this.parameter = parameter;
  this.property = property * 2;
  this.x = x*x*x;
  this.array = [];
  this.object = {};
  this.arrayOfArrays = [ [ [], [] ], [], []];
  this.boolean = true;
  this.method = function(){
    //things
  };
  this.otherMethod = iHaveParameters; // i am defining a method
  this.returnedFunction = iHaveParameters(1,2,3,4); //calls the function, and assigns the return to the property (10)
}

//prototype method
CapitalLetterConstructor.prototype.addTheThings = function () {
  //things
};


// Render things

var parent = document.getElementById('some-id');
var child = document.createElement('p');
child.textContent = 'hi';
parent.appendChild(child);

//listeners

var elementToListenTo = document.getElementById('form-id');

elementToListenTo.addEventListener('submit', function(nicholas){
  // submit events specifically refresh the page, we need to prevent it
  nicholas.preventDefault();
  //do things with the event
  var data = nicholas.target.inputName.value;
  //inputName is referenceing the name attribute in the input in the html
});

