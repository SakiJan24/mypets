const { Model, DataTypes, Sequelize } = require('sequelize');
const TYPE_PET_TABLE = 'type_pet';


const TypePetSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
 type: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class TypePet extends Model {

    static associate(models) {

        this.hasMany(models.Pet, {

            as: 'pets',
            foreignKey: 'typePet'
        });
    }

    static config(sequelize) {

        return {

            sequelize, 
            tableName: TYPE_PET_TABLE,
            modelName: 'TypePet',
            timestamps: false
        }
    }
}

module.exports = {TypePet, TypePetSchema, TYPE_PET_TABLE};

