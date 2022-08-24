const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    DOB: { type: Date }
});




/* userSchema.methods.genToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SEC, { expiresIn: "7days" });
    return token;
}; */

const User = mongoose.model("User", userSchema);

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label("Name"),
        username: joi.string().required().unique().label("Username"),
        email: joi.email().required().label("Email")
    });
    return schema.validate(data);
};

module.exports = { User, validate };