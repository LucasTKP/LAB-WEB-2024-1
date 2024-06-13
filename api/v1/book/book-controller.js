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

module.exports = {
  create,
};
