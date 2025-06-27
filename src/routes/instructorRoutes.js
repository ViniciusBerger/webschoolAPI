import express from 'express'
import InstructorController from '../controller/InstructorController.js'

const routes = express.Router()


routes.get('/instructor', InstructorController.getAllInstructors)
routes.get('/instructor/search', InstructorController.getInstructor)
routes.post('/instructor/register', InstructorController.registerInstructor)
routes.put('/instructor/update', InstructorController.updateInstructor)
routes.delete('/instructor/delete', InstructorController.deleteInstructor)

export default routes