const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.NonProfit
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res){
        db.NonProfit
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        db.NonProfit
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        // .catch(err = res.status(422).json(err));
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.NonProfit
        .findById({id: req.params.id})
        .then(dbModel => dbModel.deleteOne())
        // .then(dbModel = res.json(dbModel))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.NonProfit
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};