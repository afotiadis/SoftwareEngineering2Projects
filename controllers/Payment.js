'use strict';

var utils = require('../utils/writer.js');
var Payment = require('../service/PaymentService');

module.exports.makePayment = function makePayment (_ , res, _ , body) {
  Payment.makePayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
