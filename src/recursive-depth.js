const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    arr.forEach((element, i, array) => {
      if (element instanceof Array) {
        let sum = 1 
        sum += this.calculateDepth(element);
        if (sum  > count) {
          count = sum
        };
      };
    });
    return count;
  };
};

