const db = require("../models");

module.exports = {
    findAll: function(req,res){
        db.Transaction
        .find(req.query)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res){
        db.Transaction
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        db.Transaction
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        // .catch(err = res.status(422).json(err));
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Transaction
        .findById({id: req.params.id})
        .then(dbModel => dbModel.deleteOne())
        // .then(dbModel = res.json(dbModel))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};