const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Pin = require('../../models/Pin');
const validatePinInput = require('../../validation/pins');

router.get("/test", (req, res) => res.json({ msg: "This is the pins route" }));

router.get('/', (req, res) => {
  Pin.find()
      .sort({ date: -1 })
      .then(pins => res.json(pins))
      .catch(err => res.status(404).json({ nopinsfound: 'No pins found' }));
});

router.get('/user/:user_id', (req, res) => {
  Pin.find({user: req.params.user_id})
      .then(pins => res.json(pins))
      .catch(err =>
          res.status(404).json({ nopinsfound: 'No pins found from that user' }
      )
  );
});

router.get('/:id', (req, res) => {
  Pin.findById(req.params.id)
      .then(pin => res.json(pin))
      .catch(err =>
          res.status(404).json({ nopinfound: 'No pin found with that ID' })
      );
});

module.exports = router;