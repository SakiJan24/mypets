const { Model, DataTypes, Sequelize } = require('sequelize');
const { PET_TABLE } = require('./pet.model');
const BILL_TABLE = 'bills';

const BillSchema = {

    id: {

        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

     petId: {

        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'pet_id',
        references: {

            model: PET_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    date: {
        allowNull: false,
        type: DataTypes.DATE,
      },

    paymentDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'payment_date',
        defaultValue: Sequelize.NOW,
      },

}


class Bill extends Model {

    static associate(models) {

        this.belongsTo(models.Pet, {

            as:'billForPet',
            foreignKey: 'petId'
        });

        this.hasMany(models.PaymentInfo, {

            as:'PaymentInfos',
            foreignKey: 'billId'
        });
    }

    static config(sequelize) {

        return {

            sequelize,
            tableName: BILL_TABLE,
            modelName: 'Bill',
            timestamps: false
        }
    }
}


module.exports = { Bill, BillSchema, BILL_TABLE };