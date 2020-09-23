const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    let result  =  '';
    key = key.repeat(Math.ceil(message.length / key.length));

    key = key.toUpperCase();
    message = message.toUpperCase();

    let m = 0;
    let n = 0;
    
    while (m < message.length) {
      if (message[m].match(/[A-Z]/)) {
        result += String.fromCharCode(((message.charCodeAt(m) - 65 + key.charCodeAt(n) - 65) % 26) + 65)
      } else {
        result += message[m];
        m++;
        continue;
      };

      m++;
      n++;
    };

    if (this.mode) {
      return result;
    } else {
      return result.split('').reverse().join('');
    };

  }

  decrypt(message, key) {
    let result  =  '';
    key = key.repeat(Math.ceil(message.length / key.length));

    key = key.toUpperCase();
    message = message.toUpperCase();

    let m = 0;
    let n = 0;

    while (m < message.length) {

      if (message[m].match(/[A-Z]/)) {
        result +=  String.fromCharCode(((message.charCodeAt(m) + 26 - key.charCodeAt(n)) % 26) + 65)
      } else {
        result += message[m];
        m++;
        continue;
      };

      m++;
      n++;
    };

    if (this.mode) {
      return result;
    } else {
      return result.split('').reverse().join('');
    };

  };
};

module.exports = VigenereCipheringMachine;
