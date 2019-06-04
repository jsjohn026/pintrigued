const express = require("express");
const router = express.Router();
const passport = require('passport');
const Board = require('../../models/Board');

router.get("/test", (req, res) => res.json({ msg: "This is the boards route" }));

module.exports = router;

// index
// router.get("/")

// index by user
// router.get("/user/:user_id")

// show by id
// router.get("/:id")

// create
// router.post("/")


// update
router.patch('/:boardId', passport.authenticate('jwt', {session: false }), (req, res) => {
  Board.findOne({
    _id: req.params.boardId, 
    userId: req.user.id
  })
  .then(board => {
    if (board) {
      board.title = req.body.title;
      board.description = req.body.description;
      board.save()
      .then(board => res.json(board))
    } else {
      return res.status(404).json("Board not found");
    }
  })
})

// delete
router.delete('/:boardId', passport.authenticate('jwt', {session: false }), (req, res) => {
  Board.findOne({
    _id: req.params.boardId, 
    userId: req.user.id
  })
  .then(board => {
    if (board) {
      board.remove()
      .then( () => res.json({message: "success"}))
    } else {
      return res.status(404).json("Board not found");
    }
  })
})
