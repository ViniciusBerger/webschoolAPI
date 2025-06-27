import BaseError from "../errorsAndExceptions/errors/BaseError.js";
import Course from "../models/course.js"

class CourseController {

    // register a new course
    static async registerCourse(req,res,next) {
        try{
            let course = new Course(req.body)
            let registerCourseResult = await course.save()
            res.status(201).send(registerCourseResult.toJSON())
        }
        catch(error) {
            next(error)
        }
    }

    // get all courses 
    static async getAllCourses(req,res,next) {
        try {
            let courses = await Course.find({}).populate('instructor'); 

            if (courses.length == 0)
                return next(new BaseError)

            res.status(200).json(courses)
        }
        catch(err) {
            next(err);
        }
    }

    static async getCourse(req,res,next) {
        try {
            let course = await Course.find(req.body)
            res.status(201).json(course)
        } catch(error) {
            next(error)
        }
    }
    
    // update a course using ID as filter
    static async updateCourse(req,res,next) {
        try {
            //if body is empty or request has no body throw a base error to next
            if (!req.body || Object.keys(req.body).length === 0)
                return next(new BaseError("Request body is required.", 400));


            await Course.findOneAndUpdate({_id: req.body._id}, // filter 
                req.body, // updated data
                {new: true}) // if not existent create one

        
            res.status(200).send({message: `Course updated successfully!`});

        } catch (error) {
            next(error);
            // Pass the error to the next middleware for handling
        }
    }

    // dekete a specific course
    static async deleteCourse(req,res,next) {
        try{

            if (!req.body || Object.keys(req.body).length === 0) 
                return next(new BaseError("Course is required to be deleted", 400))
            

            let course = req.body
            let deleteCourseResult = await Course.deleteOne(course)
            

            if(deleteCourseResult.deletedCount >= 1) {
                res.status(200).send({message: `delete is complete. ${deleteCourseResult.deletedCount} item affected`})
            }
            else {
                return next(new BaseError("Could not find a course to delete.", 404))
            }
        }catch(error){
            next(error)
        }
    }

}

export default CourseController;