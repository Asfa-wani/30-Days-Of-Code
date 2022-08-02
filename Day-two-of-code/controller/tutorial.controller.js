const { where } = require("sequelize/types");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title)
        return res.status(400).send({ message: "Cannot be empty" });

    const tutorials = { title: req.title, description: req.description, published: req.published };
    Tutorial.create(tutorials)
        .then(data => {
            res.status(200).send({ message: "successfully created tutorials" });
        })
        .catch(err => {
            res.status(500).send({ message: err || "server error" });
        })

};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: {
            [Op.iLike]: `%${title}%` } } : null;
    Tutorial.findAll({ where: condition })
        .then(data => {
            if (!data)
                return res.status(404).send({ message: "not found" })
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err || "server error" });
        })
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};