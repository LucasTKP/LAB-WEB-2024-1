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


const getAuthorById = {
    params: Joi.object({
      id: Joi.string().required(),
    })
}

const deleteAuthorById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};




module.exports = {
  createAuthorSchema,
  getAuthorById,
  deleteAuthorById,
};
