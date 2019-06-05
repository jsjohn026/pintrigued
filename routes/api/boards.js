const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is the boards route" }));


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
          res.status(404).json({ noboardsfound: 'No boards found from that user' }
      )
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
// router.patch("/:userId")

// delete
// router.delete("/:id")





module.exports = router;