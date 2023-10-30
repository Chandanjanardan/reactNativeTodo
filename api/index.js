const express= require("express")
const app= express()
const User = require("./models/user.models")
const bcrypt = require("bcrypt")

const jwt= require("jsonwebtoken")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
require("dotenv").config()
app.use(cors())
app.use(express.json())
const URI= process.env.URI


mongoose.connect(URI)
app.get("/test",(req,res)=>{
     res.status(200).json({msg:"ok"})
})
app.post("/register",async(req,res)=>{
    const {username,password}=req.body
    const hashPassword=await bcrypt.hash(password,10)
   
    try {
        
        const userDoc=await User.create({username,password:hashPassword})
    
        res.json({data:{userDoc}})
    } catch (error) {
        res.status(400).json(error)
    }
})

app.listen(4000,()=>{
    console.log("Listing")
})