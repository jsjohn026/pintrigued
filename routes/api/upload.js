require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const Pin = require('../../models/Pin');
const multer = require('multer');
var AWS = require('aws-sdk');

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
  const file = req.file;
  const s3FileURL = process.env.AWS_UPLOADED_FILE_URL;
  // const randomURL = bcrypt.genSalt(10, (err, salt) => {
  //   debugger;
  //   return bcrypt.hash(file.originalname, salt, (err, hash) => {
  //     debugger;
  //     return hash;
  //   });
  // });

  const randomURL =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  let params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: file.buffer,
    Key: randomURL,
    ContentType: file.mimetype,
    ACL: 'public-read'
  };
  debugger;
  s3bucket.upload(params, (err, data) => {
    // debugger;
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      // res.send({ data });
      const newPin = new Pin({
        title: req.body.title,
        description: req.body.description,
        imageUrl: s3FileURL + randomURL,
        s3_key: params.Key
      });
      debugger;
      newPin.save().then(pin => res.json(pin));
    }
  });
});

module.exports = router;
