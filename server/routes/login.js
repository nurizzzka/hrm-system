const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { loginValidation } = require("../validation");

router.get("/login", (req, res) => {
  res.send(req.body);
});

router.post("/login", async (req, res) => {
  // Validation errors
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Chech existind data
  const user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(400).send("Name not found");

  // Check password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Password is incorrect");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
  res.header("login-token", token).send(token);
});

module.exports = router;
