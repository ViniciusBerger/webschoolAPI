import Instructor from '../models/instructor.js'
import BaseError from '../errorsAndExceptions/errors/BaseError.js';
class InstructorController {
    // register a new instructor
    static async registerInstructor(req, res, next) {
        try {
            let instructor = new Instructor(req.body)
            let registerInstructorResult = await instructor.save();
            return res.status(201).send(registerInstructorResult)
        }
        catch(error) {
            next(error)
        }
    }
    
    // get all instructors 
    static async getAllInstructors(req,res,next) {
        try {
            let instructors = await Instructor.find({});
            return res.status(200).json(instructors)
        } catch(error) {
            next(error)
        }
    }

    // get one instructor
    static async getInstructor(req,res,next) {
        try {
            let instructor = await Instructor.find(req.body)
            res.status(201).json(instructor)
        } catch(error) {
            next(error)
        }
    }

    // update an instructor
    static async updateInstructor(req,res,next) {
        try{

            if (!req.body || Object.keys(req.body).length === 0) 
                return next(new BaseError("instructor data is required", 404))
            
            await Instructor.findOneAndUpdate( {_id: req.body._id}, req.body, {new: true})

            res.status(200).send({ message: `instructor was updated successfully`,})
        } catch(error) {
            next(error)
        }
    }

    //delete an instructor
    static async deleteInstructor(req,res,next) {
        try{

            if (!req.body || Object.keys(req.body).length === 0) 
                return next(new BaseError("instructor is required to be deleted", 400))
            
            let instructor = req.body

            let deleteResult = await Instructor.deleteOne(instructor)

            if(deleteResult.deletedCount >= 1) {
                res.status(200).send({message: `delete is complete. ${deleteResult.deletedCount} item affected`})
            }
            else {
                return next(new BaseError("Could not find a course to delete.", 404))
            }
        } catch(error) {
            next(error)
        }
    }
}

export default InstructorController