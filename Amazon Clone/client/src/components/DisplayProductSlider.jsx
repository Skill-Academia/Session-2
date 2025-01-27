"use strict";

/*
 * DOCS: https://razorpay.com/docs/subscriptions/api/
 */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require('../utils/razorpay-utils'),
    normalizeDate = _require.normalizeDate;

module.exports = function plansApi(api) {

  var BASE_URL = "/plans",
      MISSING_ID_ERROR = "Plan ID is mandatory";

  return {
    create: function create() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments[1];


      /*
       * Creates a plan
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */

      var url = BASE_URL;
      return api.post({
        url: url,
        data: params
      }, callback);
    },
    fetch: function fetch(planId, callback) {

      /*
       * Fetches a plan given Plan ID
       *
       * @param {String} planId
       * @param {Function} callback
       *
       * @return {Promise}
       */

      if (!planId) {

        return Promise.reject(MISSING_ID_ERROR);
      }

      var url = BASE_URL + "/" + planId;

      return api.get({ url: url }, 