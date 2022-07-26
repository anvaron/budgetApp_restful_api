// DEPENDENCIES
const express = require("express");
const txnController = require("./controllers/transactionsController.js")

// CONFIGURATION
const cors = require("cors");
const app = express();

// ROUTES

  // Home
  app.get("/", (req, res) => {
    res.send("welcome to the Budget App");
  });

  app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

// CONTROLLER-ROUTES
app.use(cors());
app.use(express.json());
app.use("/transactions", txnController);

app.get("*", (req, res) => {
  res.send("Sorry, no page found!");
});

// EXPORT
module.exports = app;