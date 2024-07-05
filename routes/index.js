const express = require('express');
const ownerRouter = require('./../routes/owners.router');
const petRouter = require('./../routes/pets.router');
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/owners', ownerRouter);
  router.use('/pets', petRouter);

//  router.use('/categories', categoriesRouter);
  //router.use('/users', usersRouter);
  //router.use('/orders', orderRouter);
  //router.use('/customers', customersRouter);*/
}

module.exports = routerApi;
