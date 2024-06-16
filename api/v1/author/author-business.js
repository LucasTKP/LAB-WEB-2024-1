const { v4: uuidv4 } = require("uuid");
const repository = require("./author-repository");

const create = async (author) => {
  author.id = uuidv4();
  return repository.save(author);
};

const list = async () => {
  return repository.findAll();
};

const findById = async (params) => {
  return repository.findById(params);
};

const deleteById = async (params) => {
  return await repository.deleteById(params);
};

module.exports = {
  create,
  list,
  findById,
  deleteById,
};
