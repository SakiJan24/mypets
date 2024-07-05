const express = require('express');

const OwnerService = require('../services/pet.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createOwnerSchema, getOwnerSchema, updateOwnerSchema } = require('../schemas/owner.schema');


const router = express.Router();
const service = new OwnerService();

router.get('/', async (req, res, next) => {

    try {

        res.json( await service.find());
    } catch (error) {

        next(error);
    }
});



router.post('/sigin',
validatorHandler(createOwnerSchema, 'body'),
 async (req, res, next) => {

    try {
        const body = req.body;
        res.status(201).json(await service.create(body));
    }
    
    catch (error) {

        next(error);
    }
});

router.patch('/:id',
validatorHandler(getOwnerSchema, 'params'),
validatorHandler(updateOwnerSchema, 'body'),
async(req, res, next) => {

    try {

        const { id } = req.params;
        const body = req.body;
        res.status(201).json(body);
    }

    catch (error) {

        next(error);
    }

});



router.delete('/:id',
  validatorHandler(getOwnerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);




module.exports = router;

