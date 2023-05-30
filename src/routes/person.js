'use strict';

const express = require('express');

const router = express.Router();
const { personModel } = require('../models');

router.post('/person', async (req, res, next) => {
  try {
    let newPerson = await personModel.create(req.body);
    res.status(201).send(newPerson);
  } catch (error) {
    next(error);
  }
});

router.get('/person', async (req, res, next) => {
  try {
    let persons = await personModel.findAll();
    if(persons.length === 0){
      return res.status(404).send({message: `No persons found`});
    }
    res.status(200).send(persons);
  } catch (error) {
    next(error);
  }
});

router.get('/person/:id', async (req, res, next) => {
  try {
    let singlePerson = await personModel.findOne({where: {id: req.params.id}});
    if (!singlePerson) {
      return res.status(404).send({message: `Person with id: ${req.params.id} not found`});
    }
    res.status(200).send(singlePerson);
  } catch (error) {
    next(error);
  }
});

router.put('/person/:id', async (req, res, next) => {
  try {
    await personModel.update(req.body, {where: {id: req.params.id}});
    let singlePerson = await personModel.findOne({where: {id: req.params.id}});
    if (!singlePerson) {
      return res.status(404).send({message: `Person with id: ${req.params.id} not found`});
    }
    res.status(200).send(singlePerson);
  } catch (error) {
    next(error);
  }
});

router.delete('/person/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    let personToDelete = await personModel.findOne({where: {id}});

    if(!personToDelete) {
      return res.status(404).send({message: `Person with id: ${req.params.id} was not found`});
    }
    await personModel.destroy({where: {id: req.params.id}});
    res.status(200).send({message: `Person with id: ${req.params.id} was deleted`});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
