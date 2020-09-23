const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!';
  };

  if (isNaN(date)) {
    throw new Error('');
  };
  
  let a = date.getUTCMonth();

  if (a >= 0 && a <= 1 || a == 11) {
    return 'winter'
  };
  if (a >= 2 && a <= 4) {
    return 'spring'
  };
  if (a >= 5 && a <= 7) {
    return 'summer'
  };
  if (a >= 8 && a <= 10) {
    return 'autumn'
  };
};
