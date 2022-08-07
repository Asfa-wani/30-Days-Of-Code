const mongoose = require("mongoose");

const db = require("./models");
const createTutorial = function(tutorial) {
    return db.Tutorial.create(tutorial).then(docTutorial => {
        console.log("\n>> Created Tutorial:\n", docTutorial);
        return docTutorial;
    });
};
const createImage = function(tutorialId, image) {
    return db.Image.create(image).then(docImage => {
        console.log("\n>> Created Image:\n", docImage);
        return db.Tutorial.findByIdAndUpdate(
            tutorialId, {
                $push: {
                    images: {
                        _id: docImage._id,
                        url: docImage.url,
                        caption: docImage.caption
                    }
                }
            }, { new: true, useFindAndModify: false }
        );
    });
};
const run = async function() {
    var tutorial = await createTutorial({
        title: "Tutorial #1",
        author: "bezkoder"
    });
    tutorial = await createComment(tutorial._id, {
        username: "jack",
        text: "This is a great tutorial.",
        createdAt: Date.now()
    });
    console.log("\n>> Tutorial:\n", tutorial);
    tutorial = await createComment(tutorial._id, {
        username: "mary",
        text: "Thank you, it helps me alot.",
        createdAt: Date.now()
    });
    console.log("\n>> Tutorial:\n", tutorial);
};

const createComment = function(tutorialId, comment) {
    return db.Comment.create(comment).then(docComment => {
        console.log("\n>> Created Comment:\n", docComment);
        return db.Tutorial.findByIdAndUpdate(
            tutorialId, { $push: { comments: docComment._id } }, { new: true, useFindAndModify: false }
        );
    });
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