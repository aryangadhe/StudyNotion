const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

//auth
exports.auth = async(req, res, next) => {
    try {
        //extract token
         console.log("REQ.HEADERS:", req.headers);
        console.log("REQ.BODY:", req.body);
        console.log("REQ.COOKIES:", req.cookies);
       const token =
			req.cookies.token ||
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");
        console.log(token);
        //if token is missing
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token is Missing"
            });
        }

        //Verify the token
        try {
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;    
        } 
        catch (error) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }
        next();
    } 
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

//isStudent
exports.isStudent = async(req, res, next) => {
    try {
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success: false,
                message: "This is protected route for students only"
            });
        }
        next();
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        });
    }
}

//isInstructor
exports.isInstructor = async(req, res, next) => {
    try {
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success: false,
                message: "This is protected route for instructors only"
            });
        }
        next();
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        });
    }
}

//isAdmin
exports.isAdmin = async(req, res, next) => {
    try {
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "This is protected route for admins only"
            });
        }
        next();
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        });
    }
}