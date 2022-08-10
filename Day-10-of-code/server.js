const db = require("./models");
const controller = require("./controllers/tutorial.controller");
const run = async() => {
    const tut1 = await controller.createTutorial({
        title: "Tut#1",
        description: "Tut#1 Description",
    });

    const tut2 = await controller.createTutorial({
        title: "Tut#2",
        description: "Tut#2 Description",
    });

    const comment1 = await controller.createComment(tut1.id, {
        name: "bezkoder",
        text: "Good job!",
    });
};
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});