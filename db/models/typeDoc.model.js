const { Model, DataTypes, Sequelize } = require('sequelize');
const TYPE_DOC_TABLE = 'type_doc';


const TypeDocSchema =  {
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

class TypeDoc extends Model {

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

module.exports = {TypeDoc, TypeDocSchema, TYPE_DOC_TABLE};

