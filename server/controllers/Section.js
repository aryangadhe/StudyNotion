const Section = require("../models/Section");
const Course = require("../models/Course");
const { findByIdAndUpdate } = require("../models/User");

exports.createSection = async(req, res) => {
    try {
        //fetch data
        const {sectionName, courseId} = req.body;
        //data validation
        if(!sectionName || !courseId){
            res.statue(400).json({
                success: false,
                message: "All fields are required",
            });
        }    
        //create section
        const newSection = await Section.create({sectionName});
        //update
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            {
                $push:{
                    courseContent: newSection._id,
                }
            },
            {new: true},
         )
         //use populate to replace sections and subsections
         return res.status(200).json({
            success: true,
            message: "Section created successfully",
            data: updatedCourse
         })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.updateSection = async(req, res) => {
    try {
        //Data input
        const {sectionName, sectionId} = req.body;
        //data validation
        if(!sectionName || !sectionId){
            res.statue(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        //update section
        const section = await Section.findByIdAndUpdate(sectionId, {sectionName}, {new: true});

        return res.status(200).json({
            success: true,
            message: "Section updated successfully",
            data: section
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.deleteSection = async(req, res) => {
    try {
        const {sectionId} = req.params;
        await Section.findByIdAndDelete(sectionId);
        return res.status(200).json({
            success: true,
            message: "Section deleted successfully"
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}