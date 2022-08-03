require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
};
const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });



app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

/* app.post("/", (req, res) => {
    res.json(req.body);
}) */

require("./routes/tutorials.route")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})