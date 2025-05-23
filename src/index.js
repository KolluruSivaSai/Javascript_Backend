
import dotenv from "dotenv"
import connectDB from "./db/index.js";


//configuring dotenv
dotenv.config({
    path: './env'
})


connectDB()

//require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";


/*
import express from "express"
const app = express()

//starting a IIFE with semicolon is good practice 
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONDODB_URL}/${DB_NAME}`)
        //listener are part of app bcoz we use express in app.js file
        //error is an error
        app.on("error", (error) => {
            console.log("Error: ",error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening onport ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ", error)//console.log()
    
        throw error
    }
    
})()
*/