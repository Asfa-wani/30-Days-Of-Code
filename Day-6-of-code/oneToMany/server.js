const mongoose = require("mongoose");

const db = require("./models");
const createTutorial = function(tutorial) {
    return db.Tutorial.create(tutorial).then(docTutorial => {
        console.log("\n>> Created Tutorial:\n", docTutorial);
        return docTutorial;
    });
};
const createImage = function(tutorialId, image) {
    console.log("\n>> Add Image:\n", image);
    return db.Tutorial.findByIdAndUpdate(
        tutorialId, {
            $push: {
                images: {
                    url: image.url,
                    caption: image.caption
                }
            }
        }, { new: true, useFindAndModify: false }
    );
};
const run = async function() {
    var tutorial = await createTutorial({
        title: "Tutorial #1",
        author: "bezkoder"
    });
    tutorial = await createImage(tutorial._id, {
        path: "sites/uploads/images/mongodb.png",
        url: "/images/mongodb.png",
        caption: "MongoDB Database",
        createdAt: Date.now()
    });
    console.log("\n>> Tutorial:\n", tutorial);
    tutorial = await createImage(tutorial._id, {
        path: "sites/uploads/images/one-to-many.png",
        url: "/images/one-to-many.png",
        caption: "One to Many Relationship",
        createdAt: Date.now()
    });
    console.log("\n>> Tutorial:\n", tutorial);
};

mongoose.connect("mongodb://localhost:27017/day6_db", {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected successfully");
    })
    .catch(err => {
        console.log("connestion error!");
    })
run();