const { Model, DataTypes, Sequelize } = require('sequelize');

const { PAYMENT_METHOD_TABLE } = require('./paymentMethod.model');

const { BILL_TABLE } = require('./bill.model');
const PAYMENT_INFO_TABLE = 'payment_info_products';


const PaymentInfoSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
 createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  amount: {

    allowNull:false,
    type: DataTypes.INTEGER
  },
  paymentMethodId: {
    field: 'payment_method_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: PAYMENT_METHOD_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  billId: {
    field: 'bill_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: BILL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class PaymentInfo extends Model {

  static associate(models) {

    this.belongsTo(models.PaymentInfo, {

      as: 'paymentMethod',
      foreignKey: 'paymentMethodId' 
    });

    this.belongsTo(models.Bill, {

      as: 'relatedBill',
      foreignKey: 'billId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PAYMENT_INFO_TABLE,
      modelName: 'PaymentInfo',
      timestamps: false
    }
  }
}

module.exports = { PaymentInfo, PaymentInfoSchema, PAYMENT_INFO_TABLE };
