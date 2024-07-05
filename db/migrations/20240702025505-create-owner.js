'use strict';
const { OwnerSchema, OWNER_TABLE } = require('./../models/owner.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
    await queryInterface.createTable(OWNER_TABLE, OwnerSchema);
  },

  async down (queryInterface) {
    
    await queryInterface.dropTable(OWNER_TABLE);
  }
};
