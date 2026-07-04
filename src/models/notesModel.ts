import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 10, // minimum length is 10 characters 
        required: true,
        trim: true
    },
    content: {
        type: String,
        minLength: 20,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

const note = mongoose.model("note", notesSchema);

export default note;