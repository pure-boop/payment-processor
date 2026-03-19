// parser.js
const xml2js = require('xml2js');
const fs = require('fs');

class Parser {
  constructor(file) {
    this.file = file;
    this.data = {};
  }

  parse() {
    const parser = new xml2js.Parser();
    fs.readFile(this.file, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        parser.parseString(data, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            this.data = result;
          }
        });
      }
    });
  }

  getPaymentInfo() {
    return this.data.paymentInfo;
  }

  getCardInfo() {
    return this.data.cardInfo;
  }

  getTransactionStatus() {
    return this.data.transactionStatus;
  }
}

module.exports = Parser;