const Joi = require("joi");

const createAuthorSchema = {
    payload: Joi.object({
        name: Joi.string()
            .min(3)
            .max(100)
            .required(),
        biography: Joi.string()
            .max(500),
        birthdate: Joi.date().iso()
    })
};
const getAuthors = {
  query: Joi.object({
    name: Joi.string().min(3).max(100),
    birthdate: Joi.date().iso(),
  }),
};



module.exports = { createAuthorSchema, getAuthors };
