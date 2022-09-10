import mongoose from "mongoose";

const LegoSchema = new mongoose.Schema({
    setName: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgSrc: {
        type:String,
        required:true
    }
});

const LegoModel = mongoose.model("legos", LegoSchema);

export default LegoModel;