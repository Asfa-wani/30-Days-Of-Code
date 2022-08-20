const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).send({ message: "Hello this is day 17 of code" });
});

module.exports = router;