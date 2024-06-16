const business = require("./book-business");

const create = async (request, h) => {
  const { payload } = request;

  try {
    payload.authorId = payload.author.id;
    const result = await business.create(payload);

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
  }
};

const getBooks = async (request, h) => {
  const { query } = request;
    query.authorName = query["author.name"];

  const result = await business.list(query);
  return h.response(result).code(200);
};

const getBookById = async (request, h) => {
  const { params } = request;
  const result = await business.findById(params);
  return h.response(result).code(200);
};


module.exports = {
  create,
  getBooks,
  getBookById,
};
