import mongoose from "mongoose";


async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://admin-goodmind:goodlife123@cluster0.kbhvr.mongodb.net/ResultsDB");
        console.log("Mongo DB is connected")
    } catch (error) {
        console.log(error)
    }
}

connectDB()