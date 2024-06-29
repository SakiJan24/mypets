const express = require('express');

// Toca poner el service
// const OwnerService = require('../services/owner.service');
const validatorHandler = require('../middlewares/validator.handler');

/*
const {createOwnerSchema,
        getOwnerSchema,
        updateOwnerSchema
} = require('../schemas/owner.schema'); */

const router = express.Router();
//const service = new OwnerService();

router.get('/', async (req, res, next) => {

    try {

        res.json( {

            "LandingPage": "hello, welcome to the landing page please select if you want to sign in or log in"
        });
    } catch (error) {

        next(error);
    }
});


module.exports = router;

