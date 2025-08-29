const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true,
    },
    courseDescription: {
        type: String,
        trim: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    whatWillYouLearn:{
        type: String,
        trim: true,
    },
    courseContent:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section"
        }
    ],
    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReview"
        }
    ],
    price: {
        type: Number,
        required: true
    },
    thumbnaiImagel: {
        type: String
    },
    tag: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    instructions:{
        type: [String],
    },
    status: {
        type: String,
        enum: ["Draft", "Published"],
    }
});

module.exports = mongoose.model("Course", courseSchema);