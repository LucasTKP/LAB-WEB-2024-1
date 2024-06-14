const business = require("./book-business");

const create = async (request, h) => {
  const { payload } = request;

  try {
    payload.authorId = payload.authorId.id;
    const result = await business.create(payload);

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
  }
};

const getBooks = async (request, h) => {
  const { query } = request;

  const result = await business.list(query);
  return h.response(result).code(200);
};


module.exports = {
  create,
  getBooks,
};
