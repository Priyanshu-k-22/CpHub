const express = require("express");
const ApiError = require("./utils/ApiError");
const errorHandler = require("./middlewares/error.middleware");

const app = express();


app.use(errorHandler)

module.exports = app;