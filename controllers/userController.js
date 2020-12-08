const db = require("../models");
const md5=require("md5");

// Defining methods for the postsController
module.exports = {
  
  register: function(req, res) {
    db.User.create({
        email:req.body.email.toLowerCase(),
        password:md5(req.body.password),
        firstName:req.body.firstName.toLowerCase(),
        lastName:req.body.lastName.toLowerCase(),
        address:req.body.address.toLowerCase(),
        city:req.body.city.toLowerCase(),
        state:req.body.state.toLowerCase(),
        zip:req.body.zip,
        phone:req.body.phone

    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(409).json(err));
  }
};
