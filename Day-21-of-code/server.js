const express = require("express");
const cors = require("cors");
const userRoute = require("./server/routes/user")
const corsOptions = {
    origin: "http://localhost:8081"
};
const connection = require("./server/config/db.config");
const app = express();
connection();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});