'use strict';
const { OwnerSchema, OWNER_TABLE } = require('./../models/owner.model');
const {HCenterSchema, H_CENTER_TABLE} = require('./../models/hCenter.model');
const {TypeDocSchema, TYPE_DOC_TABLE} = require('./../models/typeDoc.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(H_CENTER_TABLE, HCenterSchema);
    await queryInterface.createTable(TYPE_DOC_TABLE, TypeDocSchema);
    await queryInterface.createTable(OWNER_TABLE, OwnerSchema);
  },

  async down (queryInterface) {
    
    await queryInterface.dropTable(OWNER_TABLE);
    await queryInterface.dropTable(H_CENTER_TABLE);
    await queryInterface.dropTable(TYPE_DOC_TABLE);
  }
};
