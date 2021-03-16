"use strict";


// 1. printIndices
function printIndices(items) {
  
  // The output should look like this:
  //     apple 0
  //     berry 1
  //     cherry 2

  // Arguments:
  //     items (list)

  // Returns:
  //     None

  for (const idx in items){
    console.log(items[idx], idx);
  }
}


// 2. everyOtherItem
function everyOtherItem(items = ['dog', 'cat', 'pig', 'horse', 'sheep', 'rabbit', 'emu']) {
  
  let result = []
  
  for (const idx in items) {
    if (idx % 2 === 0) {
      result.push(items[idx]); 
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
