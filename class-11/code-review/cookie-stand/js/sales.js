'use strict';

//--------------------------------
//Constructors and methods
//--------------------------------

//Cookie store constructor
function Cookie_store(location, min_customers, max_customers, avg_cookies_per_sale) {
  this.location = location;
  this.min_customers = min_customers;
  this.max_customers = max_customers;
  this.avg_cookies_per_sale = avg_cookies_per_sale;
  this.hours = business_hours;
  this.customers_per_hour = [];
  this.employees_per_hour = [];
  this.cookies_per_hour = [];
  this.total_cookies_sold = 0;
  //remove all whitespace syntax found on Stack Overflow: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text/6623263
  this.id_name = this.location.toLowerCase().replace(/\s/g, '');
}

//Cookie store method calculate_sales_per_hour
//generates random number of customers per hour, pushes to the store's customers_per_hour array
//calculates cookie sales per hour, pushes to the store's cookies_per_hour array
//updates total cookies sold for the day
//calcualtes total employees needed per hour, pushes to the store's employees_per_hour array
Cookie_store.prototype.calculate_sales_per_hour = function() {
  //iterate a number of times equal to the number of hours the store is open
  for (var i in this.hours) {
    //generate random number of customers, push to coresponding array
    //syntax for Math.random from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var max = Math.floor(this.max_customers);
    var min = Math.ceil(this.min_customers);
    var customers_per_hour = Math.floor(Math.random() * (max - min)) + min;
    this.customers_per_hour.push(customers_per_hour);

    //calculate cookies sold, push to coresponding arrray
    var cookies_per_hour = Math.round(customers_per_hour * this.avg_cookies_per_sale);
    this.cookies_per_hour.push(cookies_per_hour);
    this.total_cookies_sold += cookies_per_hour;

    //calculate employees needed for the hour, push to coresponding array
    var employees = Math.ceil(cookies_per_hour / 20);
    if (employees < 2) { employees = 2; }
    this.employees_per_hour.push(employees);
  }
};

//Cookie store method render_store_to_sales_page
//renders the store location and hourly sales to the sales table
Cookie_store.prototype.render_store_to_sales_list = function() {
  //get parent element.
  //create a new row with a unique id (store location) and a class 'store-sales'
  var get_parent_element = document.getElementById('sales-list-body');
  var store_row = document.createElement('tr');
  store_row.setAttribute('id', this.id_name);
  store_row.setAttribute('class', 'store-sales');

  //create a new cell contaning the store location and append it to the row
  var store_name = document.createElement('th');
  store_name.textContent = this.location;
  store_row.appendChild(store_name);

  //create cells for each hour that the business is open
  //each cell contains the number of cookies sold that hour
  //append cells to the row
  for (var i in this.hours) {
    var hourly_sales = document.createElement('td');
    hourly_sales.textContent = this.cookies_per_hour[i];
    store_row.appendChild(hourly_sales);
  }

  //create a cell that contains the total cookies sold for the day
  //append to the row
  var daily_total = document.createElement('td');
  daily_total.textContent = this.total_cookies_sold;
  store_row.appendChild(daily_total);

  //append whole row to the parent element (sales list)
  get_parent_element.appendChild(store_row);
};

//Cookie strore method render_employees_to_table
//renders store locations and employee count to sales page
Cookie_store.prototype.render_employees_to_table = function() {
  //get parent element.
  //create a new row with a unique id (store location) and a class 'store-employees'
  var get_parent_element = document.getElementById('employee-table-body');
  var store_row = document.createElement('tr');
  store_row.setAttribute('id', this.id_name);
  store_row.setAttribute('class', 'store-employees');

  //create a new cell contaning the store location and append it to the row
  var store_name = document.createElement('th');
  store_name.textContent = this.location;
  store_row.appendChild(store_name);

  //create cells for each hour that the business is open
  //each cell contains the number of employees needed that hour
  //append cells to the row
  for (var i in this.hours) {
    var hourly_employees = document.createElement('td');
    hourly_employees.textContent = this.employees_per_hour[i];
    store_row.appendChild(hourly_employees);
  }

  var place_holder = document.createElement('td');
  store_row.appendChild(place_holder);

  get_parent_element.appendChild(store_row);
};

//-----------------------------
//Stand alone functions
//-----------------------------

//create_new_store function
//takes input from an event listner (user input data submited through a form)
//accesses cookie store constructor to create a new store object using the input values
//add new store to stores array, calculate new store's sales, render new store to page
//re-render footer with updated totals
function create_new_store(event) {
  //prevent page refresh
  event.preventDefault();

  //access the user input data
  //assign each of the values for 'location', 'min_customers', 'max_customers', and 'avg_cookies_per_sale' to seperate variables
  var location = event.target.location.value;
  var min_customers = event.target.min_customers.value;
  var max_customers = event.target.max_customers.value;
  var avg_cookies_per_sale = event.target.avg_cookies_per_sale.value;

  //create new Cookie_store object, push it to the stores array
  //calculate sales, render store and sales to the page
  var new_store = new Cookie_store(location, min_customers, max_customers, avg_cookies_per_sale);
  stores.push(new_store);
  new_store.calculate_sales_per_hour();
  new_store.render_store_to_sales_list();
  new_store.render_employees_to_table();

  //re-render the footer with updated totals
  footer();

  //form field reset syntax found at: https://www.w3schools.com/jsref/met_form_reset.asp
  event.target.reset();


}

//header function
//populates the header of the sales table with the business hours
function header(table_head_id) {
  //get parent element
  var table_head = document.getElementById(table_head_id);

  //iterate through business hours array
  //create cells and append to the header for each hour
  for (var i in business_hours) {
    var hour = document.createElement('th');
    hour.textContent = business_hours[i];
    table_head.appendChild(hour);
  }

}

//footer function
//populates the footer of the sales table with the daily totals
function footer() {
  //get parent element and clear all it's inner HTML
  var table_foot = document.getElementById('sales-list-foot');
  table_foot.innerHTML = '';

  //create a totals row table header element
  //assign it a class, give it content, append it to the table footer
  var total_row = document.createElement('th');
  total_row.textContent = 'Hourly Totals';
  table_foot.appendChild(total_row);

  //start the total at 0
  var total_all_stores = 0;

  //for each hour of business
  //create a td element and sum the hourly sales for each store
  for (var i in business_hours) {
    var total = document.createElement('td');
    var hourly_total = 0;
    //iterate through each store, adding the number of cookies sold to the hourly total
    for (var j in stores) {
      hourly_total += (stores[j].cookies_per_hour[i]);
    }
    //fill in the td element with the hourly total and append to the table footer
    total.textContent = hourly_total;
    table_foot.appendChild(total);

    //add hourly total to the overall total
    total_all_stores += hourly_total;
  }

  //create and append the cell for the overall total
  var total_total = document.createElement('td');
  total_total.textContent = total_all_stores;
  table_foot.appendChild(total_total);
}

//--------------------------------
//Runtime
//--------------------------------

//hours the cookie stores are open
var business_hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//array of stores
var stores = [
  new Cookie_store('Pike Place', 23, 65, 6.3),
  new Cookie_store('SeaTac', 3, 24, 1.2),
  new Cookie_store('Seattle Center', 11, 38, 3.7),
  new Cookie_store('Capitol Hill', 20, 38, 2.3),
  new Cookie_store('Alki', 2, 16, 4.6)
];

//calculate daily sales for each store
//render store sales to the page
for (var i in stores) {
  stores[i].calculate_sales_per_hour();
  stores[i].render_store_to_sales_list();
  stores[i].render_employees_to_table();
}

//render header (business hours)
//render footer (sales totals)
header('sales-list-head');
footer();

header('employee-table-head');

//when a user submits info for a new store, create a new store, calculate it's sales, and render it to the page
//includes re-rendering the footer with updated totals
var form = document.getElementById('enter-new-store');
form.addEventListener('submit', create_new_store);


//-------------------------------

//TODO: stretch:
//account for variable business hours
