import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectId:{
        type:String,
        required:true

    },
    visitedHistory:[{
        timeStamp:{
            type:Number
        }
    }]

},{timeStamp:true})
const URL=mongoose.model("Url",urlSchema)
export default URL
