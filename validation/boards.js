const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBoardInput(data) {
  let errors = {};
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data, { min: 1, max: 128 })) {
    errors.title = 'Board must be between 1 and 128 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
