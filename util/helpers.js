const { distanceInWords } = require('date-fns');

function noteAge(dateOfNote) {
  return distanceInWords(dateOfNote, new Date());
}

module.exports = {
  noteAge: noteAge
};
