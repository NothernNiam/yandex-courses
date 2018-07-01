/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var intervalChangeHours = Math.floor(interval / 60);
    var inrervalChangeMinutes = (interval < 60) ? interval : interval % 60;

    var newHours = hours + intervalChangeHours;
    var newMinutes = minutes + inrervalChangeMinutes;
    if (newMinutes >= 60) {
        ++newHours;
        newMinutes -= 60;
    }
    if (newHours >= 24) {
        newHours %= 24;
    }

    var hoursString = (newHours < 10) ? '0' + newHours : newHours;
    var minutesString = (newMinutes < 10) ? '0' + newMinutes : newMinutes;
    return hoursString + ':' + minutesString;


};
