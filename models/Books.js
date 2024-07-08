const express = require('express')
 const mongoose = require('mongoose') //npm i mongoose mongodb
const Author=require('./authorModel')
const Books=require("./bookModel")
 const app = express()
 const router=express.Router();
 router.post('/',async (req,res)=>{
try{
    const {_id,name,publisher,description,authorid}=req.body
    const books=new Books({name,cost,description,authorId});
        books.save();

    const authfetch=await authorid.findById({authorId})
       if(!authfetch)
        {
           
                return res.status(404).json({ message: "User not found" }); }
            res.status(200).json({ message: "hbvhgcxthdzhjy", updatedUser });
}
catch(err){
console.log(err);
}
}  
)