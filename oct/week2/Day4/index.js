const express=require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes")


dotenv.config()
const app=express();

connectDB()

app.use(express.json())

app.use("/user",userRoutes)

const port = process.env.PORT;
app.listen(port, () => {
    console.log("My server is Running")
})