// DEPENDENCIES
const express = require("express");
const transactionsData = require("../models/transactions.js");

// CONFIG
const transactions = express.Router();

// ROUTES
  // READ
    // GET / Index => /transactions	
    transactions.get("/", (req, res) => {
      res.json(transactionsData);
    });
    // GET / Show => /transactions/:id
    transactions.get("/:id", (req, res) => {
      const { id } = req.params;
      // Validating id
      (transactionsData[id]) 
      ? 
      res.json(transactionsData[id]) 
      : 
      res.status(404).redirect('/error')
    });

  // CREATE
    // POST / Create => /transactions
    transactions.post("/", (req, res) => {
      transactionsData.push(req.body);
      res.json(transactionsData[transactionsData.length - 1]);
    });

  // UPDATE
    // PUT / Update => /transactions/:id
    transactions.put("/:indexArray", (req, res) => {
      if (transactionsData[req.params.indexArray]) {
        transactionsData[req.params.indexArray] = req.body;
        res.status(200).json(transactionsData[req.params.indexArray]);
      } else {
        res.status(404).json({ error: "Not found" });
      }
    });

  // DELETE
    // Destroy / Delete => /transactions/:id
    transactions.delete("/:indexArray", (req, res) => {
      const deletedTx = transactionsData.splice(req.params.indexArray, 1);
      res.status(200).json(deletedTx);
    });

// EXPORT
module.exports = transactions;