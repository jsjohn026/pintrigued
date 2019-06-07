const Validator = require('validator');
const validText = require('./valid-text');
const isImageUrl = require('is-image-url');

module.exports = function validatePinInput(data) {
  let errors = {};

  //Pin Title
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 1, max: 100 })) {
    errors.title = 'Pin must be between 1 and 100 characters';
  }
  
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  //Pin Description
  data.description = validText(data.description) ? data.description : '';

  if (!Validator.isLength(data.description, { max: 500 })) {
    errors.description = 'Pin description must be less than 500 characters';
  }

  //Pin ImageUrl
  data.imageUrl = validText(data.imageUrl) ? data.imageUrl : '';

  if (Validator.isEmpty(data.imageUrl)) {
    errors.imageUrl = 'Image URL is required';
  }

  if (!isImageUrl(data.imageUrl)) {
    errors.imageUrl = 'Must be a valid image URL'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};