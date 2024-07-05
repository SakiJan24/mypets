
const { BILL_TABLE, BillSchema } = require('../models/bill.model');
const { PAYMENT_METHOD_TABLE, PaymentMethodSchema } = require('../models/paymentMethod.model');
const { PAYMENT_INFO_TABLE, PaymentInfoSchema } = require('../models/paymentInfo.model');



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(BILL_TABLE, BillSchema);
    await queryInterface.createTable(PAYMENT_METHOD_TABLE, PaymentMethodSchema);
    await queryInterface.createTable(PAYMENT_INFO_TABLE, PaymentInfoSchema);
  },

  async down (queryInterface) {
    
    await queryInterface.dropTable(PAYMENT_INFO_TABLE);
    await queryInterface.dropTable(PAYMENT_METHOD_TABLE);
    await queryInterface.dropTable(BILL_TABLE);
  }
};
