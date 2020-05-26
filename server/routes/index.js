const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("NodeJS");
});

// const registerRoute = require("./register.js");
// const loginRoute = require("./login.js");
const departments = require("./departments.js");
const users = require("./users.js");

// Route middlewares
// router.use("/api", registerRoute);
// router.use("/api", loginRoute);
router.use("/api", departmentds);
router.use("/users", users);

module.exports = router;
