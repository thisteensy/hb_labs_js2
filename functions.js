"use strict";


// 1. isHometown

function isHometown(place) {   // a function called isHometown which takes with the parameter place

  return place === 'San Francisco'; // returns true if the the place is San Francisco
}


// 2. getFullName
function getFullName(firstName, lastName) { // a function called getFullName with the parameters firstNmae and lastName

  return `${firstName} ${lastName}`; // returns a string with the arguments for firstName and lastName passed into the string separated by a space
}

// Define your function here


// 3. calculateTotal
function calculateTotal(base_price, state, tax=0.05) { // a function called calculateTotal with the parameters base_price, state, and tax
  const subtotal = base_price * (1 + tax)   // establishes the constant subtotal and defines it as base_price multiplied by the sum of 1 + tax
  
  let fee = 0   // establishes the variable fee and sets the value to 0
  
  if (state === 'CA') {     // checks to see if the state is CA
    fee = 0.03 * subtotal;  // sets the product of subtotal and 0.03
  }
  else if (state === 'PA') { // checks to see if the state is PA
    fee = 2;                    // sets the fee to 2
  }
  else if (state === 'MA') {  // checks to see if the state is MA
    if (base_price <= 100) {    // checks to see if the price is greater than or equal to 100
      fee = 1;                // sets the fee to 1
    }
  }
  else {
      fee = 3;          // sets the fee to 3
  }
  return subtotal + fee; // returns the sum of subtotal and fee
}

// Define your function here
  