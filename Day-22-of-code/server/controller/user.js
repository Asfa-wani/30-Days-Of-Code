const { User, validate } = require("../models/user");


const createUser = async(req, res) => {
    try {

        const { name, username, email, gender, DOB } = req.body;
        const { error } = validate({ name, username, email, gender, DOB });
        if (error)
            return res.status(403).send({ message: error.details[0].message });
        const user = await User.findOne({ email: email });
        if (user)
            return res.status(409).send({ message: "User with this email already exists" });
        await new User({ name, username, email, gender, DOB }).save();
        res.status(200).send({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).send({ message: "Server error" });
    }
}