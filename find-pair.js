/*const fs = require("fs");

for (let i = 0; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

fs.readFile(process.argv[0], function(err, data) {
  //returns a buffer... hmmm
  console.log(data);
});*/

//work on algo. while learning node.js
//when reading in text file convert array of array O(n)
const pricesText = [
  ["Candy Bar", 500],
  ["Paperback Book", 700],
  ["Detergent", 1000],
  ["Headphones", 1400],
  ["Earmuffs", 2000],
  ["BluetoothStereo", 6000]
];

/*  
    Brute Force - sort in descending order based on pricesText[i][1] - O(n log n)
    Iterate through the array for two values adding up to gift card value or under. O(n)
    Highest two values is the correct answer. If only one or no items, return Not Possible 
    Runtime - O(n log n)
    Spacetime - O(n)
*/

/*
    Don't store anything in data structure.
    Read through input and keep track of the highest two numbers and their corresponding 
    item that is less than or equal to gift card amount.
    --edge case. if highest number cannot add up with any other number.
*/
