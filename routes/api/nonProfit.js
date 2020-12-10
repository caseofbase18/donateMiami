const router = require("express").Router();
const nonProfitController = require("../../controllers/nonProfitController")

router.route("/")
    .get(nonProfitController.findAll)
    .post(nonProfitController.save);

router.route("/:id")
    .get(nonProfitController.findOne)
    .delete(nonProfitController.remove)
    
    .put(nonProfitController.update);

module.exports = router;