const { BookModel, AuthorModel } = require("../associations");
const { Op } = require("sequelize");

const save = async (book) => {
  return BookModel.create(book);
};

const findAll = async (filter) => {
  const { title, authorName } = filter;

  try {
    const books = await BookModel.findAll({
      include: [
        {
          model: AuthorModel,
          required: true,
          attributes: ["id", "name"],
        },
      ],
      where: {
        ...(title ? { title: { [Op.iLike]: `${title}%` } } : {}),
        ...(authorName
          ? { "$Author.name$": { [Op.iLike]: `${authorName}%` } }
          : {}),
      },
    });

    return books;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
};

const findById = async (params) => {
  return BookModel.findByPk(params.id, {
    include: [
      {
        model: AuthorModel,
        required: true,
        attributes: ["id", "name"],
      },
    ],
  });
};

module.exports = {
  save,
  findAll,
  findById,
};
