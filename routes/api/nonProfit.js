const router = require("express").Router();
const nonProfitController = require("../../controllers/nonProfitController");
const userController = require("../../controllers/userController");

router.route("/")
    .get(nonProfitController.findAll)
    .post(nonProfitController.save);

router.route("/:id")
    .get(nonProfitController.findOne)
    
    // .put(nonProfitController.update)
    .post(userController.addFavorite)
    .delete(userController.removeFavorite);



module.exports = router;