const db = require("./models");
const TutorialController = require("./controllers/tutorial.controller");
const TagController = require("./controllers/tag.controller");
const run = async() => {

    const tut1 = await TutorialController.create({
        title: "Tut#1",
        description: "Tut#1 Description",
    });

    const tut2 = await TutorialController.create({
        title: "Tut#2",
        description: "Tut#2 Description",
    });
    const tut3 = await TutorialController.create({
        title: "Tut#3",
        description: "Tut#3 Description",
    });
    const tut4 = await TutorialController.create({
        title: "Tut#4",
        description: "Tut#4 Description",
    });
};
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});