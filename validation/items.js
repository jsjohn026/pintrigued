const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateItemInput(data) {
  let errors = {};

  //Item Title
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 1, max: 100 })) {
    errors.title = 'Item must be between 1 and 100 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  //Item Description
  data.description = validText(data.description) ? data.description : '';

  if (!Validator.isLength(data.description, { max: 500 })) {
    errors.description = 'Item description must be less than 500 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};