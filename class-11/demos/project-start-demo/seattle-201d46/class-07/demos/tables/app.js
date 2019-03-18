'use strict';

var table_headers = ['', 'col1', 'col2', 'col3', 'col4'];

var row1 = [1,2,3,4];
var row3 = [5, 4, 3, 2];
var nicholas = {
  puppies: [4,5,6,7]
};

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

var table_element =  document.getElementById('nums-table');
var tr_element1 = document.createElement('tr');


// Head Row
for(var i = 0; i < 5; i++){
  // content == a bunch of cells
  var td_element = document.createElement('td');
  td_element.textContent = table_headers[i];
  tr_element1.appendChild(td_element);
}

table_element.appendChild(tr_element1);


// Second Row
var tr_element2 = document.createElement('tr');

var th_element = document.createElement('th');
th_element.textContent = 'Score';
tr_element2.appendChild(th_element);

for (var i = 0; i < row1.length; i++) {
  // content == a bunch of cells
  var td_element = document.createElement('td');
  td_element.textContent = row1[i];
  tr_element2.appendChild(td_element);
}

table_element.appendChild(tr_element2);


// Third Row
var tr_element3 = document.createElement('tr');

var th_element2 = document.createElement('th');
th_element2.textContent = 'CheeseCake';
tr_element3.appendChild(th_element2);

for (var i = 0; i < row1.length; i++) {
  // content == a bunch of cells
  var td_element = document.createElement('td');
  td_element.textContent = row3[i];
  tr_element3.appendChild(td_element);
}

table_element.appendChild(tr_element3);

//Fourth (Nicholas row)

var tr_element4 = document.createElement('tr');

var th_element3 = document.createElement('th');
th_element3.textContent = 'Nicholas';
tr_element4.appendChild(th_element3);

for (var i = 0; i < row1.length; i++) {
  // content == a bunch of cells
  var td_element = document.createElement('td');
  td_element.textContent = nicholas.puppies[i];
  tr_element4.appendChild(td_element);
}

table_element.appendChild(tr_element4);
