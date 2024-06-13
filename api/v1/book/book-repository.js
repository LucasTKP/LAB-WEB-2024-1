const bookModel = require("./book-model");

const save = async (book) => {
  console.log(book);
  return bookModel.create(book);
};

module.exports = {
  save,
};
