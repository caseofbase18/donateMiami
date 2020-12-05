const { Router } = require("express");

const router = require("express").Router();
const time = require("../../controllers/timeController");

router.route("/")
    .get(time.findAll)
    .post(time.save);

router.route("/id")
    .get(time.findOne)
    .delete(time.remove)

module.exports = router;