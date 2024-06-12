const authorModel = require('./author-model');


const save = async (author) => {
    console.log(author)
    return authorModel.create(author);
}

module.exports = {
    save
}