const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Item = require('../../models/Item');
const validateItemInput = require('../../validation/pins');

// Get all Item by userId
router.get('/user/:user_id', (req, res) => {
  Item.find({ user: req.params.user_id })
    .then(pins => res.json(pins))
    .catch(err =>
      res.status(404).json({ nopinsfound: 'No pins found from that user' })
    );
});

// Get all Items by boardId
router.get('/boards/:board_id', (req, res) => {
  Item.find({ board: req.params.board_id })
    .then(pins => res.json(pins))
    .catch(err =>
      res.status(404).json({ nopinsfound: 'No pins found from that board' })
    );
});

// Get specific Item by id
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(pin => res.json(pin))
    .catch(err =>
      res.status(404).json({ nopinfound: 'No pin found with that ID' })
    );
});


//create
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newItem = new Item({
      pinId: req.body.pinId,
      boardId: req.board.boardId,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl
    });
    newItem.save().then(board => res.json(board));
  }
);
//update


//delete

module.exports = router;
