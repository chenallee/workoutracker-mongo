const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// turn on routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
