const business = require('./author-business');

const create = async (request, h) => {
    const {payload} = request;

    try {
        const result = await business.create(payload);

        return h.response(result).code(201);
    } catch(error) {
        console.log(error);
    }
}

const getAuthors = async (request, h) => {
  const { query } = request;

  const result = await business.list(query);
  return h.response(result).code(200);
};




module.exports = {
  create,
  getAuthors,
};