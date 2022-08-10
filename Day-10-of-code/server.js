const db = require("./app/models");
const controller = require("./controllers/tutorial.controller");
const run = async() => {};
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});