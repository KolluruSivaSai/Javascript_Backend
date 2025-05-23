import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //mongoose gives a return instance

       console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);// connectionInstance.connection.host to know on which db is connected...eg productio, development etc 
    }
    catch (error){
        console.log("MONGO DB connection FAILED ",error);
        process.exit(1)//process is part of node..There are many exit methodcodes
    }
}


export default connectDB