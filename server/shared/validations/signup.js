import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (!data.username) {
    errors.username = 'Username field is required';
  }

  if (!data.email) {
    errors.email = 'Email field is required';
  }

  if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }

  if (!data.password) {
    errors.password = 'Password field is required';
  }

  if (!data.passwordConfirmation) {
    errors.passwordConfirmation = 'Password Confirmation field is required';
  }
  if(!Validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = 'Password must match';
  }

  if (!data.timezpne) {
    errors.timezone = 'Timezone is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
