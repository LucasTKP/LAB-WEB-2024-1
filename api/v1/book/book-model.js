const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Book = database.sequelize.define(
  "Book",
  {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      field: "id", // nome do atributo do banco, se for diferente pode ser ajustado
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "title",
    },
    authorId: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "author_id",
      references: {
        model: "tb_author",
        key: "id",
      },
    },
    publishedDate: {
      type: Sequelize.DATE,
      allowNull: true,
      field: "published_date",
    },
    isbn: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "isbn",
    },
    summary: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: "summary",
    },
  },
  {
    timestamps: false,
    tableName: "tb_book", 
  }
);

module.exports = Book;
