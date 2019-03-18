'use strict';


var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki', 'Totals'];
var allStoreCookiesSold = [];

// Pike stores object
var firstAndPike = {
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3
};

// SeaTac Airport object
var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgCook: 1.2
};

// Seattle Center object
var seaCenter = {
    minCust: 11,
    maxCust: 38,
    avgCook: 3.7  
};

// Capitol Hill object
var capHill = {
    minCust: 20,
    maxCust: 38,
    avgCook: 2.3  
};

// Alki object
var alki = {
    minCust: 2,
    maxCust: 16,
    avgCook: 4.6  
};



// ------------------------------------------------------Not yet implementes (Probably wont need to be for lab 6)---------------------------------------------------------------------------

var storeArrayTest = [];


// Constructor function for creating store objects
function Store(name, minCust, maxCust, avgCook){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCook = avgCook;

    storeArrayTest.push(this);
};



var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);


var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);


var seaCenter = new Store('Seattle Center', 11, 38, 3.7);


var capHill = new Store('Capitol Hill', 20, 38, 2.3);


var alki = new Store('Alki', 2, 16, 4.6);





console.log(storeArrayTest);



// ------------------------------------------------------------------------------------------------------------------------












// An array that stores all of stores and their objects

var storeNum = storeArray.length;



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
    var cookiesSold = customerNumber * avgCookies;
    return Math.floor(cookiesSold);
}











for (var z = 0; z < storeNum; z++){



    // Generates a random number of customers
    function getCustomerNumber(){
        var customerNumber = getRandomIntInclusive(storeArray[z].minCust, storeArray[z].maxCust);
        return customerNumber;
    }

    var hourlyCookieList = [];


    // Gets the amount of cookies for each working hour and stores in onto an array
    for (var i = 0; i < numberOfHours; i++){
        var hourlyCookieCount = numberOfCookiesSold(getCustomerNumber(), storeArray[z].avgCook)
        
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
    





    // Showing items on the page
    var store_ul = document.getElementById('seaTac');

    var storeTitle_li = document.createElement('h4');

    storeTitle_li.textContent = storeNames[z];

    store_ul.appendChild(storeTitle_li);


    for (var l = 0; l < numberOfHours + 1; l++){
        var store_li = document.createElement('li');
        store_li.textContent = timeAndCookieArray[l];
        store_ul.appendChild(store_li);
    }
}
