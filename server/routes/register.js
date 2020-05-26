const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../validation");

router.post("/register", async (req, res) => {
  // Validation errors
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //   Hash password secure
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Chech existind data
  const nameExist = await User.findOne({ name: req.body.name });
  if (nameExist) return res.status(400).send("name already exists");

  // Creating new user
  const newUser = new User({
    name: req.body.name,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
