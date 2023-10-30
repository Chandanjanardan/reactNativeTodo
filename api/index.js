const express= require("express")
const app= express()

const jwt= require("jsonwebtoken")
const cors = require("cors")
require("dotenv").config()
app.use(cors())


app.get("/test",(req,res)=>{
     res.status(200).json({msg:"ok"})
})

app.listen(4000,()=>{
    console.log("Listing")
})