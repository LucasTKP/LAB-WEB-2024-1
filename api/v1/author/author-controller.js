const business = require('./author-business');

const create = async (request, h) => {
    const {payload} = request;

    try {
        const result = await business.create(payload);

        return h.response(result).code(201);
    } catch(error) {
        console.log(error);
    }
}




module.exports = {
    create,
};