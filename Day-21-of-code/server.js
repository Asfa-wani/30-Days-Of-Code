const express = require("express");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:8081"
};
const connection = require("./server/config/db.config");
const app = express();
connection();



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});