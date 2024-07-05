
const { Owner, OwnerSchema } = require('./owner.model');
const {HCenter, HCenterSchema} = require('./hCenter.model');
const {TypeDoc, TypeDocSchema} = require('./typeDoc.model');

const {Pet, PetSchema} = require('./pet.model');
const {TypePet, TypePetSchema} = require('./typePet.model');

const {Bill, BillSchema} = require('./bill.model');
const {PaymentMethod, PaymentMethodSchema} = require('./paymentMethod.model');
const {PaymentInfo, PaymentInfoSchema} = require('./paymentInfo.model');

function setupModels(sequelize) {
  
  Owner.init(OwnerSchema, Owner.config(sequelize));
  TypeDoc.init(TypeDocSchema, TypeDoc.config(sequelize));
  HCenter.init(HCenterSchema, HCenter.config(sequelize));
  TypePet.init(TypePetSchema, TypePet.config(sequelize));
  Pet.init(PetSchema, Pet.config(sequelize));
  Bill.init(BillSchema, Bill.config(sequelize));
  PaymentMethod.init(PaymentMethodSchema, PaymentMethod.config(sequelize));
  PaymentInfo.init(PaymentInfoSchema, PaymentInfo.config(sequelize));
  
  
  Owner.associate(sequelize.models);
  Pet.associate(sequelize.models);
  TypeDoc.associate(sequelize.models);
  TypePet.associate(sequelize.models);
  HCenter.associate(sequelize.models);
  Bill.associate(sequelize.models);
  PaymentMethod.associate(sequelize.models);
  PaymentInfo.associate(sequelize.models);
}

module.exports = setupModels;
