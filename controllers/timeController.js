const db = require("../models");

module.exports = {
    findAll: function(req,res){
        db.Time
        .find(req.query)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res){
        db.Time
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        db.Time
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        // .catch(err = res.status(422).json(err));
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Time
        .findById({id: req.params.id})
        .then(dbModel => dbModel.deleteOne())
        // .then(dbModel = res.json(dbModel))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};