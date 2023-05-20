'use strict';

const express = require('express');

const router = express.Router();
const { profileModel } = require('../models');

router.get('/profile', async (req, res, next) => {
  let profiles = await profileModel.findAll();

  res.status(200).send(profiles);
});

router.get('/profile/:id', async (req, res, next) => {
  //where clause useful for update. can also use findPK()
  let singleProfile = await profileModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleProfile);
});

router.post('/profile', async (req, res, next) => {
  let newProfile = await profileModel.create(req.body);

  res.status(200).send(newProfile);
});

module.exports = router;
