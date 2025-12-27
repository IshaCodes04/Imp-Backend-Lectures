const express = require("express");

// server created
const app = express();

// middleware for take data in req.body
app.use(express.json());




module.exports = app;