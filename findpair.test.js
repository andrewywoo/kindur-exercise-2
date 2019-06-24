const findpair = require("./findpair");

const prices = [
  ["Candy Bar", 500],
  ["Paperback Book", 700],
  ["Detergent", 1000],
  ["Headphones", 1400],
  ["Earmuffs", 2000],
  ["Bluetooth Stereo", 6000]
];

test("Execute findpair with prices inside price.text and value of 2500", () => {
  const expectedResult = [["Earmuffs", 2000], ["Candy Bar", 500]];
  expect(findpair(prices, 2500)).toEqual(
    expect.arrayContaining(expectedResult)
  );
});

test("Execute findpair with prices inside price.text and value of 2300", () => {
  const expectedResult = [["Paperback Book", 700], ["Headphones", 1400]];
  expect(findpair(prices, 2300)).toEqual(
    expect.arrayContaining(expectedResult)
  );
});

test("Execute findpair with prices inside price.text and value of 1100", () => {
  expect(findpair(prices, 1100)).toBe("Not Possible");
});
