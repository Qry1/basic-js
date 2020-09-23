const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let number = [];
  arr.forEach(item => item.forEach(elem => {
    if (elem === '^^') {
      number.push(elem)
    };
  }));
  return number.length;
};
