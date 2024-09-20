import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';


dotenv.config();

const db=process.env.MONGO;

mongoose
    .connect(db)
    .then(()=>{
        console.log("connected to DB")
    }).catch((err)=>{
        console.log(err);
    })
const app=express();


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


app.use("/api/user",userRoutes)