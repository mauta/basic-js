const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  arr.forEach(element => {
    element.forEach(el => {
      if (el === '^^') {
        result++;
      }
    });
  });
  return result;
};