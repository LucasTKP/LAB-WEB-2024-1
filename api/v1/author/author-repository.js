const { AuthorModel } = require("../associations");
const { BookModel } = require("../associations");

const save = async (author) => {
  return AuthorModel.create(author);
};

const findAll = async () => {
  return AuthorModel.findAll({
    include: [
      {
        model: BookModel,
        as: "books",
        required: false,
        attributes: ["id", "title"],
      },
    ],
  });
};

const findById = async (params) => {
  return AuthorModel.findByPk(params.id, {
    include: [
      {
        model: BookModel,
        as: "books",
        required: false,
        attributes: ["id", "title"],
      },
    ],
  });
};

const deleteById = async (params) => {
  const response = await AuthorModel.destroy({
    where: {
      id: params.id,
    },
  });
  if (response == 0) {
    return {
      message:
        "Não é possível excluir o autor pois existem livros associados a ele",
      success: false,
    };
  }

  return { message: "Autor removido com sucesso", success: true };
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
