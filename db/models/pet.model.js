const { Model, DataTypes, Sequelize } = require('sequelize');
const {TYPE_PET_TABLE} = require('./../models/typePet.model');
const { OWNER_TABLE } = require('./owner.model');
const PET_TABLE = 'pets';

const PetSchema = {

    id: {

        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    ownerId: {

        allowNull: false,
        type:DataTypes.INTEGER,
        field: 'owner_id',
        references: {

            model:OWNER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    name: {

        allowNull: false,
        type: DataTypes.STRING
    },

    actualState: {

        allowNull: false,
        type: DataTypes.BOOLEAN
    },

    description: {

        allowNull: false,
        type: DataTypes.STRING,
    },

    profileImage: {

        allowNull: true,
        type: DataTypes.STRING,
        field: 'profile_image'
    },

    typePet: {

        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'type_pet',
        references: {

            model: TYPE_PET_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    birthDate: {

        allowNull: false,
        type: DataTypes.DATE
    },

    registerDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'register_date',
        defaultValue: Sequelize.NOW,
      },

}


class Pet extends Model {

    static associate(models) {

        this.belongsTo(models.Owner, {

            as:'ownerPet',
            foreignKey: 'ownerId'
        });

        this.belongsTo(models.TypePet, {

            as: 'typeOfPet',
            foreignKey: 'typePet'
        });
    }

    static config(sequelize) {

        return {

            sequelize,
            tableName: PET_TABLE,
            modelName: 'Pet',
            timestamps: false
        }
    }
}


module.exports = { Pet, PetSchema, PET_TABLE };