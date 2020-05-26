const express = require("express");
const app = express();
const router = express.Router();
const Department = require("../models/Department");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// GET ALL DEPARTMENTS
router.get("/departments", async (req, res) => {
  try {
    const departments = await Department.find({});
    res.send(departments);
  } catch (err) {
    res.json({ message: err });
  }
});

// ADD DEPARTMENT
router.post("/departments", async (req, res) => {
  const department = new Department({
    title: req.body.title,
  });
  try {
    const savedDepartment = await department.save();
    res.status(200).json(savedDepartment);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
