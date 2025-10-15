console.log("this is backend")

const express = require("express");

const app = express();
const allRoutes = require("./routes/AllRoutes")

app.use(express.json())

app.use("/main",allRoutes)

const port = 8000;
app.listen(port,()=>{
    console.log("My server is Running")
})