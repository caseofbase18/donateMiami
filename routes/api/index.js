const router = require("express").Router();
const nonProfitRoutes = require("./nonProfit");
const postRoutes = require("./posts");
const authRoutes = require("./auth");
const accountRoutes = require("./account");
const transactionRoutes = require("./transaction");
const timeRoutes = require("./time");


// Post routes
router.use("/nonProfits", nonProfitRoutes);
router.use("/posts", postRoutes);
router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
router.use("/transaction", transactionRoutes);
router.use("/time", timeRoutes)

module.exports = router;