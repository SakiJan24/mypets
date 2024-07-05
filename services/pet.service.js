const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const typePetService = require('../services/typePet.service');
const tpService = new typePetService(); 

class PetService {

    constructor() {}

    async find() {
        const rta = await models.Pet.findAll();
        return rta;
    }

    async findOne(id) {
        const pet = await models.Pet.findByPk(id);
        if (!pet) {
            throw boom.notFound('Pet not found');
        }
        return pet;
    }

    async create(data) {

        const { typePet } = data;
        const newType = await tpService.findIdByType(typePet); 

        if (!newType || newType.length === 0) {
            throw boom.notFound('TypeDoc not found');
        }

        // Extract the ID from the result and set it to data.typeDoc
       data.typePet = newType.id;
       
       if(data.actualState === "alive") {

        data.actualState = true 
       }

       else {

        data.actualState = false
       }

       const newPet = await models.Pet.create(data);
        return newPet;
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

module.exports = PetService;
