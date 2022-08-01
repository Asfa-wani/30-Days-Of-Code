const { tutorials, tutorials } = require("../models");
const db = require("../models");
const Tutorial = db.tutorials;
// Create and Save a new Tutorial
exports.create = (req, res) => {

    //validte
    if (!req.body)
        res.status(400).send({ message: "Cannot be empty" });
    const tutorials = new Tutorials({
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        })
        .save(tutorials)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "some error occured" });
        })
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    const tutorials = Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Some error occured while retrieving the tutorials" });
        })
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
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