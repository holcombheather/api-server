'use strict';

const express = require('express');

const router = express.Router();
const { orderModel } = require('../models');
// const { validator } = require('../middleware/validator');


router.post('/order', async (req, res, next) => {
  // router.post('/order', validator, async (req, res, next) => {

  try {
    let newOrder = await orderModel.create(req.body);
    res.status(201).send(newOrder);
  } catch (error) {
    next(error);
  }
});

router.get('/order', async (req, res, next) => {
  try {
    let orders = await orderModel.findAll();
    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
});

router.get('/order/:id', async (req, res, next) => {
  try {
    let singleOrder = await orderModel.findOne({ where: { id: req.params.id } });
    if (!singleOrder) {
      return res.status(404).send({ message: `Order with id: ${req.params.id} not found` });
    }
    res.status(200).send(singleOrder);
  } catch (error) {
    next(error);
  }
});

router.put('/order/:id', async (req, res, next) => {
  // router.put('/order/:id', validator, async (req, res, next) => {
  try {
    await orderModel.update(req.body, { where: { id: req.params.id } });
    let singleOrder = await orderModel.findOne({ where: { id: req.params.id } });
    if (!singleOrder) {
      return res.status(404).send({ message: `Order with id: ${req.params.id} not found` });
    }
    res.status(201).send(singleOrder);
  } catch (error) {
    next(error);
  }
});

router.delete('/order/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    let orderToDelete = await orderModel.findOne({ where: { id } });

    if (orderToDelete === 0) {
      return res.status(404).send({ message: `Order with id: ${req.params.id} not found` });
    }

    await orderModel.destroy({ where: { id } });
    res.status(200).send({ message: `Order with id: ${req.params.id} was deleted` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
