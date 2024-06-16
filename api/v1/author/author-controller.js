const business = require("./author-business");

const create = async (request, h) => {
  const { payload } = request;

  try {
    const result = await business.create(payload);

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
  }
};

const getAuthors = async (request, h) => {
  const { query } = request;
  const result = await business.list();
  console.log(result);
  return h.response(result).code(200);
};

const getAuthorById = async (request, h) => {
  const { params } = request;
  const result = await business.findById(params);
  return h.response(result).code(200);
};

const deleteAuthorById = async (request, h) => {
  const { params } = request;
  const result = await business.deleteById(params);

  if (result.success) {
    return h.response({ message: result.message }).code(200);
  } else {
    return h.response({ message: result.message }).code(400);
  }
};

module.exports = {
  create,
  getAuthors,
  getAuthorById,
  deleteAuthorById,
};
