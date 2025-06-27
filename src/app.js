import express from 'express'
import dbConnect from './config/dbConnect.js';
import { router } from './routes/router.js';
import ErrorHandler from './errorsAndExceptions/index.js';

const app = express()
const connection = await dbConnect();

router(app)
ErrorHandler(app)

connection.on('error', (err)=> {
    console.log("connection error ", err)
})
connection.on('open', ()=> {
    console.log("database is now connected")
})
export default app;