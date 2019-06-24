/*  
    Sort input in descending order based on pricesText[i][1] - O(n log n)
    Iterate through the array for two values adding up to gift card value or under. O(n^2)
    If only one or no items, return Not Possible 
    Runtime - O(n^2)
*/

function findpair(priceList, value) {
  //sort items by descending order
  const sorted = priceList.sort((a, b) => {
    return b[1] - a[1];
  });

  let result = [];

  for (let i = 1; i < sorted.length; i++) {
    //if price of item is larger than value. skip
    if (!(sorted[i - 1][1] >= value)) {
      let firstItem = sorted[i - 1][1];
      for (let k = i; k < sorted.length; k++) {
        //compare item #1 with any product in the list's sum.
        //if equal to or under value of gift card. these two items are the correct answer.
        if (firstItem + sorted[k][1] <= value) {
          result.push(sorted[i - 1]);
          result.push(sorted[k]);
          break;
        }
      }
      //if we have two items. break out of loop.
      if (result.length === 2) {
        break;
      }
    }
  }

  if (result.length !== 0) {
    console.log(result);
    return result;
  } else {
    console.log("Not Possible");
    return "Not Possible";
  }
}

module.exports = findpair;
