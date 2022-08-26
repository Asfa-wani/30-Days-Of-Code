const express = require("express");
const cors = require("cors");
const userRoute = require("./server/routes/user");
const path = require("path");
const corsOptions = {
    origin: "http://localhost:8081"
};
const connection = require("./server/config/db.config");
const app = express();
const static_path = path.join(__dirname, "./public");
//console.log(path.join(__dirname, "./server/view"))
connection();
app.use(express.static(static_path));
app.set("view engine", "hbs")
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});