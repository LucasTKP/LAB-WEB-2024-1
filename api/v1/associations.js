const AuthorModel = require("./author/author-model");
const BookModel = require("./book/book-model");

AuthorModel.hasMany(BookModel, { foreignKey: "authorId", as: "books" });
BookModel.belongsTo(AuthorModel, { foreignKey: "authorId" });

module.exports = {
  AuthorModel,
  BookModel,
};
