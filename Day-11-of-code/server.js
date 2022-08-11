const db = require("./models");
const TutorialController = require("./controllers/tutorial.controller");
const TagController = require("./controllers/tag.controller");
const run = async() => {};
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});