const { BookModel, AuthorModel } = require("../associations");
const { Op } = require("sequelize");

const save = async (book) => {
  console.log(book);
  return BookModel.create(book);
};


const findAll = async (filter) => {
  const { title, authorId, publishedDate, isbn } = filter;

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
        ...(authorId ? { authorId } : {}),
        ...(publishedDate ? { publishedDate: { [Op.lt]: publishedDate } } : {}),
        ...(isbn ? { isbn } : {}),
      },
    });

    return books;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
};

module.exports = {
  save,
  findAll,
};
