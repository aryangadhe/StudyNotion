const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");
const { default: mongoose } = require("mongoose");

//create rating
exports.createRating = async(req, res) => {
    try {
        const {userId} = req.user.id;
        const {rating, review, courseId} = req.body;
        //check if user is enrolled
        const courseDetails = await Course.findOne(
            {_id: courseId,
             studentsEnrolled: {$elemMatch: {$eq: userId}},
            }
        );
        
        if(!courseDetails){
            return res.status(400).json({
                success: false,
                message: "User is not enrolled in this course"
            });
        }

        //check if user is already enrolled
        const alreadyReviewed = await RatingAndReview.findOne({user: userId, course: courseId});
        if(alreadyReviewed ){
            return res.status(403).json({
                success: false,
                message: "You have already reviewed this course"
            });
        }

        //create rating and review
        const ratingReview = await RatingAndReview.create({
            rating, review,
            course: courseId,
            user: userId,
        });

        //update
        await Course.findByIdAndUpdate({_id: courseId}, 
            {
                $push: {
                    ratingsAndReviews: ratingReview._id,
                }
            }, {new: true}
        )

        return res.status(200).json({
            success: true,
            message: "Rating and review created successfully",
            ratingReview
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//getAverageRatings
exports.getAverageRatings = async(req, res) => {
    try {
        const {courseId} = req.courseId;
        const result = await RatingAndReview.aggregate([
            {
                $match: {
                    course: courseId,
                },
            },
            {
                $group: {
                    _id: null,
                    averageRating: {$avg: "$rating"},
                },
            }
        ])    

        if(result.length > 0){
            return res.status(200).json({
                success: true,
                averageRating: result[0].averageRating,
            });
        }

        return res.status(200).json({
            success: true,
            averageRating: 0,
            message: "No ratings found"
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//get all ratingAndReviews
exports.getAllRating = async(req, res) => {
    try {
        const allRatings = await RatingAndReview.find({})
                                    .sort({rating: "desc"})
                                    .populate({
                                        path: "user",
                                        select: "firstName lastName email image",
                                    })    
                                    .populate({
                                        path: "course",
                                        select: "courseName",
                                    }).exec();
        return res.status(200).json({
            success: true,
            data: allRatings,
            message: "All reviews fetched successfully",
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}