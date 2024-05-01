import userModels from "../models/userModels.mjs"
const getUser=async (req,res)=>{
   try {
    const user=await userModels.find();
    return res.status(200).send({ status: true, message: user });
   } catch (error) {
    return res.status(500).send({status:false,message:error.message})
   }
}
const createUser=async (req,res)=>{
    try {
        const data=req.body
    const userdata=await userModels.create(data)
   return res.status(201).send({status:"ok",message:userdata})
    } catch (error) {
       return res.status(500).send({status:false,message:error.message})
    }
}
export {getUser,createUser}