/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = tweet.split(' ');
    var hashtags = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.charAt(0) === '#') {
            hashtags.push(word.slice(1));
        }
    }
    return (hashtags);
};
