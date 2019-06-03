const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI
const users = require('./routes/api/users');
const boards = require('./routes/api/boards');
const pins = require('./routes/api/pins');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Board = require('./models/Board');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Pintrigue is starting"))
app.use("/api/users", users);
app.use("/api/boards", boards);
app.use("/api/pins", pins);

app.listen(port, () => console.log(`Server is running on port ${port}`))