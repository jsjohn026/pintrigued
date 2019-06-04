const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is the boards route" }));


// index
// router.get("/")

// index by user
// router.get("/user/:user_id")

// show by id
// router.get("/:id")

// create
// router.post("/")

// update
// router.patch("/:userId")

// delete
// router.delete("/:id")





module.exports = router;