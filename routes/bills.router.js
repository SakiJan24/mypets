const express = require('express');

const BillService = require('../services/bill.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPetSchema, getPetSchema, updatePetSchema } = require('../schemas/pet.schema');

const router = express.Router();
const service = new BillService();

router.get('/', async (req, res, next) => {

    try {

        res.json( await service.find());
    } catch (error) {

        next(error);
    }
});

router.get('/payment_info', async (req, res, next) => {

    try {

        res.json( await service.find());
    } catch (error) {

        next(error);
    }
});


router.get('/payment_info/:id', async (req, res, next) => {

    try {

        res.json( await service.find());
    } catch (error) {

        next(error);
    }
});


router.get('/:id',
  validatorHandler(getPetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const pet = await service.findOne(id);
      res.json(pet);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/create',
validatorHandler(createPetSchema, 'body'),
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
  validatorHandler(getPetSchema, 'params'),
  validatorHandler(updatePetSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const pet = await service.update(id, body);
      res.json(pet);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPetSchema, 'params'),
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