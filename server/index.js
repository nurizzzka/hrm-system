const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const config = require("./config/config");

const app = express();

// test
app.get("/posts", (req, res) => {
  res.send([
    {
      title: "Hello World!",
      description: "Hi there! How are you?",
    },
  ]);
});

app.listen(process.env.PORT || config.port, () =>
  console.log(`Server has been started on port ${config.port}...`)
);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
