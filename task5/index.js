/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var uniqueValues = [];
    for (var i = 0; i < hashtags.length; i++) {
        var hashtag = hashtags[i].toLowerCase();
        if (!uniqueValues.includes(hashtag)) {
            uniqueValues.push(hashtag);
        }
    }
    return uniqueValues.join(', ');
};
