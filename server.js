import express from 'express'

import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()


const app=express()
const MON_URL=process.env.MONGODB_URL
const port=process.env.PORT ||5000


app.use(express.json())
app.listen(port,async ()=>{
    try{
        await mongoose.connect(MON_URL)
        console.log("connected to MongoDB ")

    

    }catch(err){
        console.log(err)
    }
    console.log(`server running on port ${port}`)

})
