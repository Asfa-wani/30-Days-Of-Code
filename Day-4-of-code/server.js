const express = require("express");
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081/"
};
const app = express();
const bodyParser = require("body-parser");

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ messages: "this is day 4 of node code practice" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})