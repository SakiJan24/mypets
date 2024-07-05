const { Model, DataTypes, Sequelize } = require('sequelize');
const PAYMENT_METHOD_TABLE = 'payment_method_doc';


const PaymentMethodSchema =  {
  
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
 method: {
    allowNull: false,
    type: DataTypes.STRING,
  },
 bank: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class PaymentMethod extends Model {

    static associate(models) {

        this.hasMany(models.Owner, {

            as: 'owners',
            foreignKey: 'typeDoc'
        });
    }

    static config(sequelize) {

        return {

            sequelize, 
            tableName: TYPE_DOC_TABLE,
            modelName: 'TypeDoc',
            timestamps: false
        }
    }
}

module.exports = {PaymentMethod, PaymentMethodSchema, PAYMENT_METHOD_TABLE};

