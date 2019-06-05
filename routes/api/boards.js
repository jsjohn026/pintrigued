const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validateBoardInput = require('../../validation/boards');
const passport = require('passport');
const Board = require('../../models/Board');

// create
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // debugger;
    const { errors, isValid } = validateBoardInput(req.body.title);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newBoard = new Board({
      title: req.body.title,
      description: req.body.description,
      userId: req.user.id
    });
    newBoard.save().then(board => res.json(board));
  }
);

// update
// router.get("/:id")

router.get('/test', (req, res) =>
  res.json({ msg: 'This is the boards route' })
);

router.get('/', (req, res) => {
  Board.find()
    .sort({ date: -1 })
    .then(boards => res.json(boards))
    .catch(err => res.status(404).json({ noboardsfound: 'No boards found' }));
});

router.get('/user/:user_id', (req, res) => {
  Board.find({ userId: req.params.user_id })
    .then(boards => res.json(boards))
    .catch(err =>
      res.status(404).json({ noboardsfound: 'No boards found from that user' })
    );
});

router.get('/:id', (req, res) => {
  Board.findById(req.params.id)
    .then(pin => res.json(pin))
    .catch(err =>
      res.status(404).json({ noboardfound: 'Board does not exist' })
    );
});

// create
// router.post("/")

// update
router.patch(
  '/:boardId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Board.findOne({
      _id: req.params.boardId,
      userId: req.user.id
    }).then(board => {
      if (board) {
        board.title = req.body.title;
        board.description = req.body.description;
        board.save().then(board => res.json(board));
      } else {
        return res.status(404).json('Board not found');
      }
    });
  }
);

// delete
router.delete(
  '/:boardId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Board.findOne({
      _id: req.params.boardId,
      userId: req.user.id
    }).then(board => {
      if (board) {
        board.remove().then(() => res.json({ message: 'success' }));
      } else {
        return res.status(404).json('Board not found');
      }
    });
  }
);
// update
// router.patch("/:userId")

// delete
// router.delete("/:id")

module.exports = router;
