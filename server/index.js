const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

// Init the app
const app = express();

dotenv.config();

// Import routes
app.use("/", require("./routes/index"));

// Middleswares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require("./config/passport")(passport);
// Connect to DB
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`DB connected successfully ${db}`);
  })
  .catch((err) => {
    console.log(`Unable to connect with the DB ${err}`);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
