/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    var hoursValid = 0 <= hours && hours <= 23;
    var minutesValid = 0 <= minutes && minutes <= 59;
    return hoursValid && minutesValid;
};
