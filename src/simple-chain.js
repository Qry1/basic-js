const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value);
    return this;
  },
  removeLink(position) {
    if (this.result[position - 1] === undefined) {
      this.result = []; 
      throw new Error('');
    } else {
      this.result.splice(position - 1, 1);
    };
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.result.length; i++) {
      str += `( ${this.result[i]} )~~`;
    };
    newStr = str.slice(0, str.length - 2);
    this.result = [];
    return newStr;
  }
};

module.exports = chainMaker;
