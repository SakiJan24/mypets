'use strict';
const { PetSchema, PET_TABLE } = require('./../models/pet.model');
const {TypePetSchema, TYPE_PET_TABLE} = require('./../models/typePet.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(TYPE_PET_TABLE, TypePetSchema);
    await queryInterface.createTable(PET_TABLE, PetSchema);
  },

  async down (queryInterface) {
    
    await queryInterface.dropTable(PET_TABLE);
    await queryInterface.dropTable(TYPE_PET_TABLE);
  }
};
