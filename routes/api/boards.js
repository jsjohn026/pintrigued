const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateBoardInput = require('../../validation/boards');

router.get('/test', (req, res) =>
  res.json({ msg: 'This is the boards route' })
);

// index
// router.get("/")

// index by user
// router.get("/user/:user_id")

// show by id
router.get('/:id');

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
    debugger;
    newBoard.save().then(board => res.json(board));
  }
);

// update
// router.patch("/:userId")

// delete
// router.delete("/:id")

module.exports = router;
