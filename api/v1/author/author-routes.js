const { create } = require('./author-controller');
const schema = require('./author-schema');

const plugin = {
    name: 'author-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "POST",
                path: "/v1/authors",
                options: {
                    tags: ['api'],
                    handler: create,
                    validate: schema.createAuthorSchema
                }
            },
        ])
    }
};

module.exports = plugin;