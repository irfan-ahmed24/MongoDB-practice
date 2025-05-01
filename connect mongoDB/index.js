
const express=require("express")
const app=express();

//connect mongoDB with server
const mongoose = require('mongoose');

const connectDB=async ()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/mongoDbpractice');
       console.log("DB connected successfully")
    } catch (error) {
        console.log(error)
    }
}

// create mongoose schema 
const productSchema= mongoose.Schema({
    title:String,
    price:Number
})
//create mongoose model 

const product=mongoose.model("mongoDbpractice",productSchema)

const port=3000;

app.get("/",(req,res)=>{
    res.send("this is home route")
})

app.listen(port,async ()=>{
    console.log(`server is running at http://localhost:${port}`)
    await connectDB();
})