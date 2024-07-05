const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');

class typeDocService {

    constructor() {}

    async findIdByType(typePet) {

        const query = 'SELECT id FROM type_pet WHERE type = :typePet';

        const [results, metadata] = await  sequelize.query(query, {

            replacements: { typePet },
            type: sequelize.QueryTypes.SELECT
        });
        if(!results || results.length === 0) {
            throw boom.notFound('TypeDoc not found');
        }
        return results;
    }
}

module.exports = typeDocService;