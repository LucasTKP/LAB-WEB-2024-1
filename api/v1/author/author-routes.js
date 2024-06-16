const {
  create,
  getAuthors,
  getAuthorById,
  deleteAuthorById,
} = require("./author-controller");
const schema = require("./author-schema");

const plugin = {
  name: "author-v1-route",
  version: "1",
  register: (server) => {
    server.route([
      {
        method: "POST",
        path: "/v1/authors",
        options: {
          tags: ["api"],
          handler: create,
          validate: schema.createAuthorSchema,
        },
      },
      {
        method: "GET",
        path: "/v1/authors",
        options: {
          tags: ["api"],
          handler: getAuthors,
        },
      },
      {
        method: "GET",
        path: "/v1/authors/{id}",
        options: {
          tags: ["api"],
          handler: getAuthorById,
          validate: schema.getAuthorById,
        },
      },
      {
        method: "DELETE",
        path: "/v1/authors/{id}",
        options: {
          tags: ["api"],
          handler: deleteAuthorById,
          validate: schema.getAuthorById,
        },
      },
    ]);
  },
};

module.exports = plugin;
