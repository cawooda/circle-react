const express = require("express");
require("dotenv").config();
const path = require("path");

const api = require("./api");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

module.exports = app;
