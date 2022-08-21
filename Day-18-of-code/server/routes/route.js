const { retrieve } = require("../controllers/controller");

const router = require("express").Router();

router.get("/", retrieve);

module.exports = router;