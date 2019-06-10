const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Item = require('../../models/Item');
const Pin = require('../../models/Pin');
const validateItemInput = require('../../validation/items');

// Get all Items by userId
router.get('/users/:userId', (req, res) => {
  Item.find({ userId: req.params.userId })
    .then(items => res.json(items))
    .catch(err =>
      res.status(404).json({ noitemsfound: 'No items found from that user' })
    );
});

// Get all Items by boardId
router.get('/boards/:boardId', (req, res) => {
  Item.find({ boardId: req.params.boardId })
    .then(items => res.json(items))
    .catch(err =>
      res.status(404).json({ noitemsfound: 'No items found from that board' })
    );
});

// Get specific Item by id
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err =>
      res.status(404).json({ noitemfound: 'No item found with that ID' })
    );
});

//create
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Pin.findById(req.body.pinId).then(pin => {
      const newItem = new Item({
        pinId: req.body.pinId,
        userId: req.user.id,
        boardId: req.body.boardId,
        title: pin.title,
        description: pin.description,
        imageUrl: pin.imageUrl
      });
      newItem.save().then(board => res.json(board));
    });
  }
);

//update
router.patch(
  '/:itemId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.findOne({
      _id: req.params.itemId,
      userId: req.user.id
    }).then(item => {
      if (item) {
        const { errors, isValid } = validateItemInput(req.body);

        if (!isValid) {
          return res.status(400).json(errors);
        }

        item.title = req.body.title;
        item.description = req.body.description;
        item.save().then(item => res.json(item));
      } else {
        return res.status(404).json('Pin not found');
      }
    });
  }
);

//delete
router.delete(
  '/:itemId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.findOne({
      _id: req.params.itemId,
      userId: req.user.id
    }).then(item => {
      if (item) {
        item.remove().then(() => res.json({ itemId: item._id }));
      } else {
        return res.status(404).json('Pin not found');
      }
    });
  }
);

module.exports = router;
