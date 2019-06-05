const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBoardInput(data) {
  let errors = {};
  data = validText(data) ? data : '';

  // if (!Validator.isLength(data.title, { min: 5, max: 140 })) {
  //   errors.title = 'Pin must be between 5 and 140 characters';
  // }

  if (Validator.isEmpty(data)) {
    errors.title = 'Title field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
