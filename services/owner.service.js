const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const typeDocService = require('../services/typeDoc.service');
const tdService = new typeDocService(); 

class OwnerService {

    constructor() {}

    async find() {
        const rta = await models.Owner.findAll();
        return rta;
    }

    async findOne(id) {
        const owner = await models.Owner.findByPk(id);
        if (!owner) {
            throw boom.notFound('Owner not found');
        }
        return owner;
    }

    async create(data) {
        const { typeDoc } = data;
        const newType = await tdService.findIdByType(typeDoc); 

        if (!newType || newType.length === 0) {
            throw boom.notFound('TypeDoc not found');
        }

        // Extract the ID from the result and set it to data.typeDoc
       data.typeDoc = newType.id;

        const newOwner = await models.Owner.create(data);
        return newOwner;
    }

    async update(id, changes) {
        const model = await this.findOne(id);
        const rta = await model.update(changes);
        return rta;
    }

    async delete(id) { 
        const model = await this.findOne(id);
        await model.destroy();
        return { rta: true };
    }
}

module.exports = OwnerService;
