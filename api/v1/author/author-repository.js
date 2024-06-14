const { AuthorModel } = require("../associations");
const { BookModel } = require("../associations");
const { Op } = require("sequelize");

const save = async (author) => {
  console.log(author);
  return AuthorModel.create(author);
};

const findAll = async (filter) => {
  const { name, birthdate } = filter;
  return AuthorModel.findAll({
    include: [
      {
        model: BookModel,
        as: "books",
        required: false,
        attributes: ["id", "title"],
      },
    ],
    where: {
      ...(name ? { name: { [Op.iLike]: `${name}%` } } : {}),
      ...(birthdate ? { birthdate } : {}),
    },
  });
};

module.exports = {
  save,
  findAll,
};
