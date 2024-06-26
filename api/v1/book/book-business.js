const { v4: uuidv4 } = require("uuid");
const repository = require("./book-repository");

const create = async (author) => {
  author.id = uuidv4();
  return repository.save(author);
};

const list = async (filter) => {
  return repository.findAll(filter);
};

const findById = async (params) => {
  return repository.findById(params);
};

module.exports = {
  create,
  list,
  findById,
};
