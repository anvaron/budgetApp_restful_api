// DEPENDENCIES
const express = require("express");
const txController = require("./controllers/transactionsController.js")

// CONFIGURATION
const cors = require("cors");
const app = express();

// ROUTES

  // Home
app.get("/", (req, res) => {
	res.send("welcome to the  Budget App");
});

// CONTROLLER-ROUTES
app.use(cors());
app.use(express.json());
app.use("/transactions", txController);

app.get("*", (req, res) => {
  res.send("Sorry, no page found!");
});

// EXPORT
module.exports = app;