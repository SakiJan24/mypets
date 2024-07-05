const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');

class typeDocService {

    constructor() {}

    async findIdByType(typeDoc) {

        const query = 'SELECT id FROM type_doc WHERE type = :typeDoc';

        const [results, metadata] = await  sequelize.query(query, {

            replacements: { typeDoc },
            type: sequelize.QueryTypes.SELECT
        });
        if(!results || results.length === 0) {
            throw boom.notFound('TypeDoc not found');
        }
        return results;
    }
}

module.exports = typeDocService;