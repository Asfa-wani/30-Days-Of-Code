const mongoose = require("mongoose");

const Customerchema = mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

const Customer = mongoose.model("Customer", Customerchema);
module.exports = { Customer, Customerchema };