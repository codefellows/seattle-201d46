'use strict';











var allStoreCookiesSold = [];


var storeObjectArray = [];


// Constructor function for creating store objects
function Store(name, minCust, maxCust, avgCook){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;

  storeObjectArray.push(this);
}




var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);


// var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);


// var seaCenter = new Store('Seattle Center', 11, 38, 3.7);


// var capHill = new Store('Capitol Hill', 20, 38, 2.3);


// var alki = new Store('Alki', 2, 16, 4.6);

// var test = new Store('test', 2, 16, 4.6);





var storeCount = storeObjectArray.length;






// Stores the string for working times
var workingTimeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var numberOfHours = workingTimeArray.length;


// Gives a random number between parameters inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


// Simulated number of cookies sold (rounded down)
function numberOfCookiesSold(customerNumber, avgCookies){
  // debugger;
  var cookiesSold = customerNumber * avgCookies;
  return Math.floor(cookiesSold);
}





function getCustomerNumber(index){
  var customerNumber = getRandomIntInclusive(storeObjectArray[index].minCust, storeObjectArray[index].maxCust);
  return customerNumber;
}

for (var z = 0; z < storeCount; z++){



  // Generates a random number of customers

  var hourlyCookieList = [];


  // Gets the amount of cookies for each working hour and stores in onto an array
  for (var i = 0; i < numberOfHours; i++){
    var hourlyCookieCount = numberOfCookiesSold(getCustomerNumber(z), storeObjectArray[z].avgCook);

    hourlyCookieList.push(hourlyCookieCount);
  }

  //Pushes all day cookies sold onto another array to get an array with all store and all cookies
  allStoreCookiesSold.push(hourlyCookieList);



  var timeAndCookieArray = [];

  // Concatinates the cookie count and the time they got sold
  for (var j = 0; j < numberOfHours; j++){
    var timeAndCookies = workingTimeArray[j] + ': ' + hourlyCookieList[j] + ' cookies';
    timeAndCookieArray.push(timeAndCookies);
  }




  var total2 = 0;

  // Calculates total amount of cookies and add
  for (var k = 0; k < numberOfHours; k++){

    total2 = total2 + hourlyCookieList[k];

  }
  timeAndCookieArray.push('Total: ' + total2 + ' cookies');
}














var table_headers = [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];
var tableWidth = table_headers.length;
var tableContentWidth = tableWidth - 1;
var tableWorkingTimeWidth = tableWidth - 2;









var cookieTotalArray = [];







// Calculates the total amount of cookies for each store and stores them on an Array
var inc = 0;





for(var a = 0; a < storeCount; a++){
  var sum = 0;
  var inc2=0;
  for (var b = 0; b < tableWorkingTimeWidth; b++){
    sum += allStoreCookiesSold[a][b];
  }

  cookieTotalArray.push(sum);

}










var eachHourTotal = [];
// Calculates the total for for each working hour across all stores
for (var k = 0; k < tableWorkingTimeWidth; k++){
  var result = 0;
  console.log('ran');
  for (var e = 0; e < storeCount; e++){
    result = result + allStoreCookiesSold[e][k];
  }
  eachHourTotal.push(result);
}
// allStoreCookiesSold.push(eachHourTotalArray);
// console.log(eachHourTotal);
// cookieTotalArray.push(eachHourTotal);







// Calculates total of all hour totals and appends it to the total array
var maxTotalSum = 0;

for (var v = 0; v < cookieTotalArray.length; v++){
  maxTotalSum = maxTotalSum + cookieTotalArray[v];
}
eachHourTotal.push(maxTotalSum);


console.log(cookieTotalArray);









// Adds the total onto the cookie arrays
for (var c = 0; c < cookieTotalArray.length; c++){
  allStoreCookiesSold[c].push(cookieTotalArray[c]);
}




// parent element
// new element
// content
// appendchild



// numsTable
// new tr
// content
//  parent === tr (table row)
//  new el === td (table data, or a cell)
//  content === a number (5)
//  append the td to the tr
// append the tr to the table (table.appendChild(tr))





var cookieTable = document.getElementById('cookieTable');
var trElement1 = document.createElement('tr');










// for (var i = 0; i < 15; i++){
// ================= Kris space =====================












function renderTable (){
  // Head Row
  for(var i = 0; i < tableWidth; i++){

    var td_element = document.createElement('td');
    td_element.textContent = table_headers[i];
    trElement1.appendChild(td_element);
  }
  cookieTable.appendChild(trElement1);


  // Dynamically will fill up the table with the relavent data
  for (var k = 0; k < storeCount; k++){

    var trElement = document.createElement('tr');
    var th_element = document.createElement('th');
    th_element.textContent = storeObjectArray[k].name;
    trElement.appendChild(th_element);

    for (var j = 0; j < tableContentWidth; j++){

      var td_element = document.createElement('td');
      td_element.textContent = allStoreCookiesSold[k][j];
      trElement.appendChild(td_element);
    }
    cookieTable.appendChild(trElement);
  }
  console.log(allStoreCookiesSold);


  // Adds the total for each our onto the table
  var trElement = document.createElement('tr');
  var th_element = document.createElement('th');
  th_element.textContent = 'Total';
  trElement.appendChild(th_element);

  for (var b = 0; b < tableContentWidth; b++){

    var td_element = document.createElement('td');
    td_element.textContent = eachHourTotal[b];
    trElement.appendChild(td_element);
  }
  cookieTable.appendChild(trElement);
}
renderTable ();





































var cookieStore = document.getElementById('cookie-store');



var storeTable = document.getElementById('cookieTable');















// Sores the values of the input form
var formSubmitHandler = function (event) {
  // debugger;
  event.preventDefault();

  console.log('Making a new store');

  // parseInt('5') === 5
  // parseInt() === unstringy the int;
  // parseInt means convert a string into an integer

  var storeName = event.target.storeName.value;
  var minCustFromForm = event.target.minCustFromForm.value;
  minCustFromForm = parseInt(minCustFromForm);

  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = event.target.avgCookies.value;
  avgCookies = parseInt(avgCookies);

  console.log(storeName);
  console.log(minCustFromForm);
  console.log(maxCustomers);
  console.log(avgCookies);


  var newStore = new Store(storeName, minCustFromForm, maxCustomers, avgCookies);

  console.log(newStore);
  newStore.render();
};




// Generates a random number of customers
Store.prototype.getCustomerNumber = function(min, max){
  // debugger;
  var customerNumber = getRandomIntInclusive(this.minCust, this.maxCust);
  return customerNumber;
};


Store.prototype.render = function(){
  // debugger;
  var trElement = document.createElement('tr');


  var td_element = document.createElement('td');
  td_element.textContent = this.name;
  trElement.appendChild(td_element);





  var hourlyCookieList = [];


  // Gets the amount of cookies for each working hour and stores in onto an array
  // TODO: hourlyCookieCounter is NaN, make it a number
  for (var i = 0; i < numberOfHours; i++){

    var hourlyCookieCount = numberOfCookiesSold(this.getCustomerNumber(), this.avgCook);
    // debugger;
    hourlyCookieList.push(hourlyCookieCount);
  }






  for (i = 0; i < 15; i++){
    var td_element = document.createElement('td');
    td_element.textContent = hourlyCookieList[i];
    trElement.appendChild(td_element);
  }

  storeTable.appendChild(trElement);

};













cookieStore.addEventListener('submit', formSubmitHandler);
