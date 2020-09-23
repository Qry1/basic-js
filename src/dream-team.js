const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  };
  let strArr = [];
  members.forEach((elem, i) => {
    if (typeof elem === 'string') {
      strArr.push(elem.trim()[0].toUpperCase());
    };
  });
  return strArr.sort().join('');
};
