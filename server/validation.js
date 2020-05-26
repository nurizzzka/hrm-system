const Joi = require("@hapi/joi");

// Register validation

const registerValidation = (data) => {
  const schema = {
    name: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
  };
  return Joi.validate(data, schema);
};

const loginValidation = (data) => {
  const schema = {
    name: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;