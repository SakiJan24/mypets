const { Model, DataTypes, Sequelize } = require('sequelize');
const {TYPE_DOC_TABLE} = require('./../models/typeDoc.model');
const { H_CENTER_TABLE } = require('./hCenter.model');
const OWNER_TABLE = 'owners';

const OwnerSchema = {

    id: {

        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    hCenterId: {

        allowNull: false,
        type:DataTypes.INTEGER,
        field: 'h_center_id',
        references: {

            model:H_CENTER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    name: {

        allowNull: false,
        type: DataTypes.STRING
    },

    lastName: {

        allowNull: false,
        type:DataTypes.STRING,
        field: 'last_name'
    },

    address: {

        allowNull: false,
        type: DataTypes.STRING,
    },

    profileImage: {

        allowNull: true,
        type: DataTypes.STRING,
        field: 'profile_image'
    },

    phone: {

        allowNull: false,
        type: DataTypes.INTEGER 
    },

    typeDoc: {

        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'type_doc',
        references: {

            model: TYPE_DOC_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    numDoc: {

        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },

    username: {

        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },

    password: {

        allowNull: false,
        type: DataTypes.STRING
    }

}


class Owner extends Model {

    static associate(models) {

        this.belongsTo(models.TypeDoc, {

            as:'documentType',
            foreignKey: 'typeDoc'
        });

        this.belongsTo(models.HCenter, {

            as: 'healthCenter',
            foreignKey: 'hCenterId'
        });

        this.hasMany(models.Pet, {

            as: 'pets',
            foreignKey: 'ownerId'
        });
    }

    static config(sequelize) {

        return {

            sequelize,
            tableName: OWNER_TABLE,
            modelName: 'Owner',
            timestamps: false
        }
    }
}


module.exports = { Owner, OwnerSchema, OWNER_TABLE };