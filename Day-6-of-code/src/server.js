const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/day5_db", {
        useNewUrlParser: true,
        //useUnifiedToplogy: true,
    })
    .then(() => {
        console.log("Connected to db sucessfully");
    })
    .catch((err) => {
        console.log("could not connect", err);
    });

const Customer = require("./models/Customer");
const Identifier = require("./models/Identifier");
const createCustomer = function(name, age, gender) {
    const customer = new Customer({
        name,
        age,
        gender
    });
    return customer.save();
};
const createIdentifier = function(cardCode, customer) {
    const identifier = new Identifier({
        cardCode,
        customer
    });
    return identifier.save();
};
createCustomer("asfa", 25, "female")
    .then(customer => {
        console.log("> Created new Customer\n", customer);

        const customerId = customer._id.toString();
        return createIdentifier(customerId.substring(0, 10).toUpperCase(), customerId);
    })
    .then(identifier => {
        console.log("> Created new Identifier\n", identifier);
    })


.catch(err => console.log(err));

const showAllIdentifier = async function() {
    const identifiers = await Identifier.find().populate("customer");
    console.log("> All Identifiers\n", identifiers);
};
const identifiers = await Identifier.find()
    .populate("customer", "-_id -__v");