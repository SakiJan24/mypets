const { Model, DataTypes, Sequelize } = require('sequelize');


const H_CENTER_TABLE = 'hCenters';

const HCenterSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
 phone: {
    allowNull: true,
    type: DataTypes.STRING,
  }
}

class HCenter extends Model {

    static associate(models) {
      this.hasMany(models.Owner, {
        as: 'owner',
        foreignKey: 'hCenterId'
      });
    }
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: H_CENTER_TABLE,
        modelName: 'HCenter',
        timestamps: false
      }
    }
  }


module.exports = {HCenter, HCenterSchema, H_CENTER_TABLE};