import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({ path: '/.env' })

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGODB connection failed. Error:  ", err)
})











/*
import express from "express";
const app = express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error connecting to MongoDB. Error: ", error);
    }
}) ()
*/