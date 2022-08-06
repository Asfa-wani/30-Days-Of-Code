const mongoose = require("mongoose");
const Customerchema = require("./Customer").Customerchema;

const Identifier = mongoose.model(
    "Identifier",
    new mongoose.Schema({
        cardCode: String,
        customer: Customerchema,
    })
);
module.exports = Identifier;