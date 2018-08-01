// Телефонная книга
let phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let contactArr = command.split(' ');
    let commandName = contactArr[0];
    if (commandName === 'ADD') {
        let contactName = contactArr[1];
        let contactNumbers = contactArr[2].split(',');
        if (!(contactName in phoneBook)) {
            phoneBook[contactName] = contactNumbers;
        } else {
            phoneBook[contactName] = phoneBook[contactName].concat(contactNumbers);
        }
    }
    else if (commandName === 'REMOVE_PHONE') {
        let toRemove = contactArr [1];
        for (contactName in phoneBook) {
            let contactNumbers = phoneBook[contactName];
            if (contactNumbers.includes(toRemove)) {
                delete contactNumbers[toRemove];
                contactNumbers.splice(contactNumbers.indexOf(toRemove), 1);
                phoneBook[contactName] = contactNumbers;
                return true;
            }
        }
        return false;
    }
    else if (commandName === 'SHOW') {
        let result = [];
        for (contactName in phoneBook) {
            if (phoneBook[contactName].length > 0) {
                let contactString = contactName + ': ' + phoneBook[contactName].join(', ');
                result.push(contactString);
            }
        }
        return (result.sort());
    }
};



