
const Joi = require('joi');

const id = Joi.number().integer();
const hCenterId = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(20);
const address = Joi.string().min(5).max(30);
const profileImage = Joi.string().uri();
const phone = Joi.number().integer();
const typeDoc = Joi.string().min(2).max(5);
const numDoc = Joi.string().min(10).max(20);
const username = Joi.string().min(3).max(15);
const password = Joi.string().min(5).max(30);

const getOwnerSchema = Joi.object({

    id: id.required(),
});

const createOwnerSchema = Joi.object({

    hCenterId: hCenterId.required(),
    name: name.required(),
    lastName: lastName.required(),
    address: address.required(),
    profileImage: profileImage.required(),
    phone: phone.required(),
    typeDoc: typeDoc.required(),
    numDoc: numDoc.required(),
    username: username.required(),
    password: password.required()
});


const updateOwnerSchema = Joi.object({

    hCenterId ,
    name ,
    lastName ,
    address ,
    profileImage ,
    phone,
    typeDoc,
    numDoc,
    username,
    password
});

const deleteOwnerSchema = Joi.object({

    id: id.required(),
    username: username.required(),
    password: password.required()
}) 
module.exports = { getOwnerSchema, createOwnerSchema,updateOwnerSchema, deleteOwnerSchema };
