import userModels from "../../../backend/src/models/userModels.mjs";

const createuser=async (req,res)=>{
    try {
        const data=req.body
        const user=await userModels.create(data)
        return res.status(200).send({status:true,message:user})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
export {createuser}