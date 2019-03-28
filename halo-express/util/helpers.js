const { distanceInWords } = require('date-fns');

module.exports = function(dateOfNote) {
  return distanceInWords(dateOfNote, new Date());
};
