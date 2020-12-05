const { Router } = require("express");

const router = require("express").Router();
const transaction = require("../../controllers/transactionController");

router.route("/")
    .get(transaction.findAll)
    .post(transaction.save);

router.route("/id")
    .get(transaction.findOne)
    .delete(transaction.remove)

module.exports = router;