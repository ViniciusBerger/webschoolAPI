import mongoose from "mongoose"
import BaseError from "../errors/BaseError.js"
mongoose

const exceptionHandler = (error, req, res, next) => {
    
    if (error instanceof mongoose.Error.ValidationError) {
        const errorMessages = Object.values(error.errors)
                             .map((erro)=> {return erro.message})
                             .join(',');

        return res.status(400).send({message: `the following fields are required: ${errorMessages }`})
    } else if (error instanceof mongoose.Error.CastError) {
        return res.status(400).send({
            message:`one or more required fields were left empty`
        })
    } 
    else if (error instanceof BaseError) {
        return error.sendMessage(res)
    }
    
    console.log(error) // debugging purpose
}


export default exceptionHandler