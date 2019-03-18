'use strict';

/*
Create an object for each location
Input information about that store

KVPs
    1. Location
    2. MinCust/hr
    3. MaxCust/hr
    4. Avg Cookie/Cust

Methods
    1. Calculate random number of customers
    2. Calculate average sales per hour
    3. Calculate total sales per day
    4. List details in an ordered manner
    5. Render results onto webpage

*/

//This function calculates a random number
//Copied from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Global variables
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storesArray = [];

//Create constructor function
function Business(location, min, max, avgCookie, hours, numCustomers, avgSales) {
  this.location = location;
  this.minNumCustomers = min;
  this.maxNumCustomers = max;
  this.avgCookiePerCustomer = avgCookie;
  this.hoursOfOperation = hours;
  this.numCustomersArray = numCustomers;
  this.avgSalesPerHour = avgSales;
}

//Create methods for constructors
//This method will calculate random number of customers per hour
Business.prototype.numCustomers = function(){
  var randomNumCustomers = getRandomIntInclusive(this.minNumCustomers, this.maxNumCustomers);
  // console.log('random number is: ' + randomNumCustomers);
  return randomNumCustomers;
};

//This method will calculate avg sales per hours
//avgSalesPerHour = avgCookiePerCustomer * numCustomersArray[i]
Business.prototype.avgSales = function(index){
  var avgCookiesPerCustomerPerHour = Math.floor(this.avgCookiePerCustomer * this.numCustomersArray[index]);
  return avgCookiesPerCustomerPerHour;
};

//This method will calculate total # cookies
Business.prototype.totalSales = function(){
  var totalCookies = 0;
  for(var j = 0; j < this.avgSalesPerHour.length; j++){
    totalCookies = totalCookies + this.avgSalesPerHour[j];
  }
  return totalCookies;
};

//This method will solve for everything
Business.prototype.listEverything = function(){
  console.log(`${this.location} Results`);

  for(var i = 0; i < this.hoursOfOperation.length; i++){
    this.numCustomersArray.push(this.numCustomers());
    this.avgSalesPerHour.push(this.avgSales(i));

    //Essentially what is happening
    // var sales = this.avgSales(0);
    // this.avgSalesPerHour.push(sales);

    //this is too obscure
    // Math.floor(this.calcculateRandom(this.randomCustomerMin, this.randomCustomerMax) * averageCookies)

    console.log(`${this.hoursOfOperation[i]}: ${this.avgSalesPerHour[i]} cookies`);

  }
  // console.log('Total Cookies: ' + this.totalSales());
  console.log(`Total Cookies: ${this.totalSales()}`);
};

/*

MAKING A TABLE
<table>
  <tr> // reference table; create a tr; give it content (tds); table.appendChild(tr)
    <td></td> // reference tr; create td; give it content(text); tr.appendChild(td)
    <td></td>
    .
    .
    .
  </tr>
</table>

Make a table following the format below. Example:

        6AM   7AM   8AM
Pike    10    30    1000
SeaTac  14    47    2

*/

//References a table element ("parent")
var tableEl = document.getElementById('salesTable');

//Header follows different format compared to the rest of the table
//This function will render the header
function buildHeader() {
  var header_tr = document.createElement('tr');
  var blankSpace = document.createElement('td');
  // blankSpace.textContent = ''; //optional
  header_tr.appendChild(blankSpace);

  for(var l = 0; l < hoursOfOperation.length; l++){
    var nextHeader_td = document.createElement('td');
    nextHeader_td.textContent = hoursOfOperation[l];
    header_tr.appendChild(nextHeader_td);
  }
  var total_td = document.createElement('td');
  total_td.textContent = 'Daily Location Total';
  header_tr.appendChild(total_td);
  tableEl.appendChild(header_tr);
}


//This method will add data ('td') to the rows ('tr')
Business.prototype.addData = function(next_tr, location, totalSales) {
  var title_td = document.createElement('td');
  title_td.textContent = location;
  next_tr.appendChild(title_td);

  for(var m = 0; m < this.hoursOfOperation.length; m++){
    var next_td = document.createElement('td');
    next_td.textContent = this.avgSalesPerHour[m];
    next_tr.appendChild(next_td);
  }

  var sumCookies = document.createElement('td');
  sumCookies.textContent = totalSales;
  next_tr.appendChild(sumCookies);
};

// //This method will add rows ('tr') to the table ('salesTable') and render the information
Business.prototype.addRow = function() {
  var location = this.location;
  var sumCookies = this.totalSales();
  var next_tr = document.createElement('tr');
  this.addData(next_tr, location, sumCookies);
  tableEl.appendChild(next_tr);
};

// ===================================================================



//This function will calculate the hourly total betwwen all stores
var hourlyTotalArray = [];

// function sumAllStores(n){
//   var sum = 0;
//   for (var i in storesArray) { // add all the totals
//     sum = sum + storesArray[i].avgSalesPerHour[n];
//   }

//   // sum = pike.avgSalesPerHour[n] + seatacAirport.avgSalesPerHour[n] + seattleCenter.avgSalesPerHour[n] + capHill.avgSalesPerHour[n] + alki.avgSalesPerHour[n];
//   hourlyTotalArray.push(sum);
// }

// function totalPerHour() {
//   for(var n = 0; n < hoursOfOperation.length; n++){ // every hour
//     sumAllStores(n);
//   }
// }


function totalPerHour() {
  for (var n = 0; n < hoursOfOperation.length; n++) { // every hour
    var sum = 0;
    for (var i in storesArray) { // add all the totals
      sum = sum + storesArray[i].avgSalesPerHour[n];
    }

    // sum = pike.avgSalesPerHour[n] + seatacAirport.avgSalesPerHour[n] + seattleCenter.avgSalesPerHour[n] + capHill.avgSalesPerHour[n] + alki.avgSalesPerHour[n];
    hourlyTotalArray.push(sum);
  }
}




//Footer follows different format compared to the rest of the table
//This function will render the footer
function buildFooter() {
  var footer_tr = document.createElement('tr');
  var footer_td = document.createElement('td');
  footer_td.textContent = 'Total';
  footer_tr.appendChild(footer_td);
  for(var q = 0; q < hoursOfOperation.length; q++){
    var nextFooter_td = document.createElement('td');
    nextFooter_td.textContent = hourlyTotalArray[q];
    footer_tr.appendChild(nextFooter_td);
  }
  var dailyTotal_td = document.createElement('td');
  dailyTotal_td.textContent = dailyTotal;
  footer_tr.appendChild(dailyTotal_td);
  tableEl.appendChild(footer_tr);
}

//Initialize Page
var pike = new Business('1st and Pike', 23, 65, 6.3, hoursOfOperation, [], []);
storesArray.push(pike);
// pike.listEverything();

var seatacAirport = new Business('SeaTac Airport', 3, 24, 1.2, hoursOfOperation, [], []);
storesArray.push(seatacAirport);
// seatacAirport.listEverything();

var seattleCenter = new Business('Seattle Center', 11, 38, 3.7, hoursOfOperation, [], []);
storesArray.push(seattleCenter);
// seattleCenter.listEverything();

var capHill = new Business('Capitol Hill', 20, 38, 2.3, hoursOfOperation, [], []);
storesArray.push(capHill);
// capHill.listEverything();

var alki = new Business('Alki', 23, 65, 6.3, hoursOfOperation, [], []);
storesArray.push(alki);
// alki.listEverything();

//Calculate daily total between all stores

for(var i in storesArray){ // for(var i = 0; i < storesArray.length; i++)
  storesArray[i].listEverything();
}

//Build Table
totalPerHour();
var dailyTotal = pike.totalSales() + seatacAirport.totalSales() + seattleCenter.totalSales() + capHill.totalSales() + alki.totalSales();

buildHeader(); // builds the header

//use the array to render each store
for(var i = 0; i < storesArray.length; i++){
  storesArray[i].addRow();
}
// pike.addRow(); // add the row of pike
// seatacAirport.addRow(); // ''
// seattleCenter.addRow(); // ''
// capHill.addRow();// ''
// alki.addRow(); // ''
buildFooter(); // ''
