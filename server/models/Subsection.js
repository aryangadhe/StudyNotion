const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const subsectionSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    timeDuration: {
        type: String,
    },
    description: {
        type: String
    },
    videoUrl: {
        type: String
    }
});

module.exports = mongoose.model("Subsection", subsectionSchema);