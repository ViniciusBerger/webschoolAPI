import express from "express";
import CourseController from '../controller/courseController.js';

const routes = express.Router()

routes.get('/course', CourseController.getAllCourses)
routes.get('/course/search', CourseController.getCourse)
routes.put('/course/update', CourseController.updateCourse)
routes.post('/course/register', CourseController.registerCourse)
routes.delete('/course/delete', CourseController.deleteCourse)


export default routes;
