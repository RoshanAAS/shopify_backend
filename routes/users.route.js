

 const express=require("express")
 const mongoose=require("mongoose")

 const userRouter=express.Router()
 const {UserModel}=require("../model/user.model")


 userRouter.post("/name",async(req,res)=>{
      
   try {
      const newpost= new UserModel(req.body)
      await newpost.save()

      res.status(200).json({msg:"Name has been added Successfully"})
  } catch (error) {
      res.status(400).json({msg:error.message})
  }

 })

 userRouter.get("/",async(req,res)=>{
       
   try {
      // const collection = mongoose.collection('users');
       const data =await  UserModel.find()
       res.status(200).json(data)
   } catch (error) {
       res.status(400).json({msg:error.message})
   }
})







   
   




 module.exports={userRouter}

