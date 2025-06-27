import mongoose from 'mongoose';

const instructorSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, " name is required"],
        validate: (value) => {value.trim() != ""}
    },

    email: {
        type: String,
        required: [true, " email is required"],
    },


    courses: {
        type: mongoose.Types.ObjectId,
        ref:'Courses',
    }
})

const instructor = mongoose.model('instructor', instructorSchema)
export default instructor