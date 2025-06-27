import mongoose from 'mongoose';
import dotenv from 'dotenv'

export default async function dbConnect() {
    dotenv.config();
    mongoose.connect(process.env.MONGO_DB_STRING_CONNECTION)
    return mongoose.connection
}
