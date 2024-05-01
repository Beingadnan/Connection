import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    user:String,
    userPass:String,
},{timestamps:true})
export default mongoose.model("User",userSchema)