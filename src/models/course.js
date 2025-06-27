import mongoose from 'mongoose';

const courseSchema = mongoose.Schema ({
    title: {
        type: String,
        required: [true, "the title is required"],
        validate: (value)=> {value.trim()!=""}
    },

    description: {
        type: String,
        required: [true, "the description is required"],
        validate: (value)=> { value.lenght >= 10 }
    },

    instructor: {
        type: mongoose.Types.ObjectId,
        ref: 'instructor',
        required: [true, "the instructor is required"],
    }
})

const course = mongoose.model('Courses', courseSchema)
export default course;