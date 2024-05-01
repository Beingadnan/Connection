import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import router from "./routes/router.mjs";
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://beingadnank78:xVLnW5JhIEjFT2eX@cluster0.dbhfphq.mongodb.net/Revision?retryWrites=true&w=majority")
.then(()=>console.log("Database connected"))
.catch((err)=>console.log(err.message))

app.use('/',router)
app.listen(8000,()=>{
    console.log("server started at",8000)
})