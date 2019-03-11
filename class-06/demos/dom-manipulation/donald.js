'use strict';

/*
I have some video game characters
each of them participates in 7 battles
I need to track how much damage they deal each battle

Donald
  min attacks: 7
  max attacks : 12.3
  avg damage: 99

Cloud
  min attks: 99
  max attks: 902
  avg damage: 0.2
*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var donald = {
  min_attacks: 7,
  max_attacks: 12.3,
  avg_damage: 99,
  battle_damage_array: [],
};

donald.render_battles_to_page = function() {
  // put Donald on the page
  console.log('im going on the page');

  // Get the parent
  // Make a new element
  // Give it content
  // append it to the page

  var donald_ul = document.getElementById('donald');

  var title_li = document.createElement('li');

  title_li.textContent = 'Donald\'s Damage';

  donald_ul.appendChild(title_li);

  for (var i = 0; i < this.battle_damage_array.length; i++) {
    var new_li = document.createElement('li');
    var donald_damage = this.battle_damage_array[i];
    new_li.textContent = `Fight ${i + 1} damage: ${donald_damage}`;

    // new_li.textContent = `Fight ${i + 1} damage: ${this.battle_damage_array[i]}`;
    //Template literal: uses a ` instead of a ' or "
    // `${//any javascript} `
    donald_ul.appendChild(new_li);
  }
};

donald.calculate_attacks_per_battle = function (){
  for(var i = 0; i < 7; i++){
    var random_attack_amount = getRandomIntInclusive(this.min_attacks, this.max_attacks);
    var random_attack_damage = random_attack_amount * this.avg_damage;
    this.battle_damage_array.push(random_attack_damage);
  }
};


// Initialize the page
donald.calculate_attacks_per_battle(); // run the method that makes my data before I try to put it on the page
donald.render_battles_to_page();

var cloud = {
  min_attacks: 99,
  max_attacks: 902,
  avg_damage: 0.2,
  battle_damage_array: [],
};

cloud.render_battles_to_page = function () {
  // put Donald on the page
  console.log('im going on the page');

  // Get the parent
  // Make a new element
  // Give it content
  // append it to the page

  var donald_ul = document.getElementById('cloud');

  var title_li = document.createElement('li');

  title_li.textContent = 'Cloud\'s Damage';

  donald_ul.appendChild(title_li);

  for (var i = 0; i < this.battle_damage_array.length; i++) {
    var new_li = document.createElement('li');
    var donald_damage = this.battle_damage_array[i];
    new_li.textContent = `Fight ${i + 1} damage: ${donald_damage}`;

    // new_li.textContent = `Fight ${i + 1} damage: ${this.battle_damage_array[i]}`;
    //Template literal: uses a ` instead of a ' or "
    // `${//any javascript} `
    donald_ul.appendChild(new_li);
  }
};

cloud.calculate_attacks_per_battle = function () {
  for (var i = 0; i < 7; i++) {
    var random_attack_amount = getRandomIntInclusive(this.min_attacks, this.max_attacks);
    var random_attack_damage = random_attack_amount * this.avg_damage;
    this.battle_damage_array.push(random_attack_damage);
  }
};


// Initialize the page
cloud.calculate_attacks_per_battle(); // run the method that makes my data before I try to put it on the page
cloud.render_battles_to_page();

