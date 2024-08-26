import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isPublished:{
        type:Boolean,
        required:true,
    },
    isPreview:{
        type:Boolean,
        required:true,
    }
}, { timestamps: true });

export const Lecture = mongoose.model("Lecture", lectureSchema);
