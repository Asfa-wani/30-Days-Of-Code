const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/day6_db", {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected successfully");
    })
    .catch(err => {
        console.log("connestion error!");
    })