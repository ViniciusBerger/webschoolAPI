import express from 'express';
import courseRoutes from './courseRoutes.js'
import instructorRoutes from './instructorRoutes.js'

export const router = (app) => {
    app.route('/').get((req,res, next) => {
        res.status(200).send("server is running")
    })
    
    
    app.use(express.json(), courseRoutes, instructorRoutes)
}