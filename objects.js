"use strict";


// 1. countWords
function countWords(phrase) { // a function called countWords with one parameter called phrase
  const wordCounts = {}     // a constant called wordCounts that is assigned an empty dictionary
  
  for (const word of phrase.split(' ')) { // iterates through an array of words from phrase
    if (word in wordCounts){      // checks for word in the wordCounts dictionary
      wordCounts[word] += 1;    // increases the value of the word in the wordCounts dictionary by 1
    }
    else {    
      wordCounts[word] = 1;   // adds the word to the wordCounts dictionary and increases the count by 1
    }
  }
  return wordCounts; // returns the wordCounts dictionary
};


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {  // a function called getMelonsAtPrice with one parameter, price
  const melonPrices = {         // establishes a constant called melonPrices and assigns it a dictionary
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
}
  if (!price in melonPrices) {    // checks to see if price is a key in the melonPrices dictionary
    return;
  }
  return melonPrices[price].sort(); // returns a list of the the sorted values found at price
};
