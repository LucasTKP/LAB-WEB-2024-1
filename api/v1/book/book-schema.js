const Joi = require("joi");

const createBookSchema = {
  payload: Joi.object({
    title: Joi.string().min(3).max(255).required(),
    authorId: Joi.object({
      id: Joi.string().required(),
    }).required(),
    publishedDate: Joi.date().iso().less("now"),
    isbn: Joi.string(),
    summary: Joi.string().max(1000),
  }),
};

const getBooks = {
  query: Joi.object({
    title: Joi.string().min(3).max(255),
    authorId: Joi.string(),
    publishedDate: Joi.date().iso().less("now"),
    isbn: Joi.string(),
  }),
};

module.exports = { createBookSchema, getBooks };
