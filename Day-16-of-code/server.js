const express = require("express");
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
};
const app = express();


app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});