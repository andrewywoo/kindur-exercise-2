/*const fs = require("fs");

for (let i = 0; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

fs.readFile(process.argv[0], function(err, data) {
  //returns a buffer... hmmm
  console.log(data);
});*/

/*  
    Sort in descending order based on pricesText[i][1] - O(n log n)
    Iterate through the array for two values adding up to gift card value or under. O(n)
    Highest two values is the correct answer. If only one or no items, return Not Possible 
    Runtime - O(n log n)
    Spacetime - O(n)
*/

function findpair(priceList, value) {
  //sort items by descending order
  const sorted = priceList.sort((a, b) => {
    return b[1] - a[1];
  });

  let result = [];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1][1] + sorted[i][1] <= value) {
      result.push(sorted[i - 1]);
      result.push(sorted[i]);
      break;
    }
  }

  console.log(result);
  if (result) {
    return result;
  } else {
    return "Not Possible";
  }
}

module.exports = findpair;
