import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    user:String,
    email:String,
    pass:String
},{timestamps:true})
export default mongoose.model("Info",userSchema)