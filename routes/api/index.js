const router = require("express").Router();
const nonProfitRoutes = require("./nonProfit");

router.use("/nonProfits", nonProfitRoutes);

module.exports = router;