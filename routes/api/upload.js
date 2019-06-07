require('dotenv').config();
const express = require('express');
const router = express.Router();
const Pin = require('../../models/Pin');
const multer = require('multer');
var AWS = require('aws-sdk');
const validatePinInput = require('../../validation/pins');


var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const createPin = (body, res) => {
  const { title, description, imageUrl, linkUrl } = body
  newPin = new Pin({
    title,
    description,
    imageUrl,
    linkUrl,
  });
  newPin.save().then(pin => res.json(pin));
}

router.post('/', upload.single('file'), (req, res) => {
  const { body, file } = req

  if (file) {

    const s3FileURL = process.env.AWS_UPLOADED_FILE_URL;
    const randomURL =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
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

    s3bucket.upload(params, err => {
      if (err) {
        res.status(500).json({ error: true, Message: err });
      } else {
        body.imageUrl = s3FileURL + randomURL
        createPin(body, res)
      }
    });

  } else {

    const { errors, isValid } = validatePinInput(body);
    if (!isValid) return res.status(400).json(errors)
    createPin(body, res)
  }
});

module.exports = router;
