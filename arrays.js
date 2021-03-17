"use strict";


// 1. printIndices
function printIndices(items) {
  
  for (const idx in items){
    console.log(items[idx], idx);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  
  let result = []
  
  for (const idx in items) {
    if (idx % 2 === 0) {
      result.push(items[idx]); 
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) { //a function that takes a list of numbers and another number
  const sorted_n_items = items.sort((a, b) => a-b).slice(0, n); //sorts the items from lowest to highest, and returns only items 1-n
  sorted_n_items.reverse(); //reverses the order of the items

  console.log(sorted_n_items); //prints the list
}
