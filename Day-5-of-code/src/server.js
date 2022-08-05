const mongoose = requie("mongoose");
mongoose.connect("mongodb://localhost:27017/day5_db", {
        useNewUrlParser: true,
        useUnifiedToplogy: true,
    })
    .then(() => {
        console.log("Connected to db sucessfully");
    })
    .catch((err) => {
        console.log("could not connect", err);
    })