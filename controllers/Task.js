const Task =require("../models/Task");



const getAllTask=async (req,res)=>{
  const Tasks=await Task.find({});
  res.status(200).json({Tasks});
}

module.exports={getAllTask};