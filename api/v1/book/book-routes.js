const { create, getBooks, getBookById } = require("./book-controller");
const schema = require("./book-schema");

const plugin = {
  name: "book-v1-route",
  version: "1",
  register: (server) => {
    server.route([
      {
        method: "POST",
        path: "/v1/books",
        options: {
          tags: ["api"],
          handler: create,
          validate: schema.createBookSchema,
        },
      },
      {
        method: "GET",
        path: "/v1/books",
        options: {
          tags: ["api"],
          handler: getBooks,
          validate: schema.getBooks,
        },
      },
      {
        method: "GET",
        path: "/v1/books/{id}",
        options: {
          tags: ["api"],
          handler: getBookById,
          validate: schema.getBookById,
        },
      }
    ]);
  },
};

module.exports = plugin;
