
const Joi = require('joi');

const id = Joi.number().integer();
const ownerId = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const birthDate = Joi.date().iso();
const typePet = Joi.string().min(2).max(5);
const actualState = Joi.string().min(5).max(30);
const username = Joi.string().min(5).max(30);
const password = Joi.string().min(5).max(30);
const description = Joi.string().min(15).max(100);
const getPetSchema = Joi.object({

    id: id.required(),
});

const createPetSchema = Joi.object({

    ownerId: ownerId.required(),
    name: name.required(),
    birthDate: birthDate.required(),
    typePet: typePet.required(),
    actualState: actualState.required(),
    description: description.required()
});


const updatePetSchema = Joi.object({

    ownerId ,
    name ,
    birthDate ,
    typePet,
    actualState,
    description
});

const deletePetSchema = Joi.object({

    username: username.required(),
    password: password.required()
}) 
module.exports = { getPetSchema, createPetSchema,updatePetSchema, deletePetSchema };
