'use strict';

var testForm = document.getElementById('test-form');

var cookieStores = [];
var storeTable = document.getElementById('stores');


// testForm.addEventListener('submit', function(event){
//   console.log(event);
// });

var formSubmitHandler = function (formSubmit) {
  //when the form submits, it refreshes the page, lets prevent that
  formSubmit.preventDefault();

  // if I want the text in the username box
  // i look into the <event (parameter of callback function)>
  // into the <event>.target
  // into the <event>.target.<name (from html)>
  // into the <event>.target.<name>.value
  var username = formSubmit.target.username.value;
  var pet = formSubmit.target.pet.value;

  console.log(username);
  console.log(pet);
};

testForm.addEventListener('submit', formSubmitHandler);



// ===============================
// Practical Example
// ===============================

var cookieForm = document.getElementById('cookie-store');

function makeNewStore (event){
  // var event = <event>
  event.preventDefault();
  console.log('Making a new store');
  // details about store: name: min: max: avg

  // Collect a value <event>.target.<name>.value
  var name = event.target.storeName.value;
  var min = event.target.minCustomers.value;
  var max = event.target.maxCustomers.value;
  var avg = event.target.avgCustomers.value;

  console.log(name, min, max, avg);

  var newStore = new CookieStore(name, min, max, avg);

  console.log(newStore);
  newStore.render();


  // ==============================================
  // Second Iteration, dont do this until everything else works
  // ==============================================

  //add the new store to my all stores array
  cookieStores.push(newStore);

  // Clear an elements inner html
  storeTable.innerHTML = '';
  // then re-render the table
  renderTable();

}

cookieForm.addEventListener('submit', makeNewStore);

























var CookieStore = function(name, min, max, avg){
  this.minCust = min;
  this.maxCust = max;
  this.avgCust = avg;
  this.name = name;
};

CookieStore.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.minCust;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.maxCust;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.avgCust;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};

function renderTable(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Min Cust';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Max Cust';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent ='Avg Cust';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);

  for(var i in cookieStores){
    cookieStores[i].render();
  }

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Footer';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

cookieStores.push(new CookieStore('201d46', 15, 18, 3.2));
cookieStores.push(new CookieStore('201dAnyOther', 1, 2, .5));


renderTable();
