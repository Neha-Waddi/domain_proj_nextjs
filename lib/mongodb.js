import mongoose from "mongoose";

export const connectMongodb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    }catch(error){
        console.log("error connecting to mongodb");
    }
}