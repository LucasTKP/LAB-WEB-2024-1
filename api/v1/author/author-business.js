const { v4: uuidv4 } = require('uuid');
const repository = require('./author-repository')

const create = async (author) => {
    author.id = uuidv4();
    return repository.save(author);
}

module.exports = {
    create,
}