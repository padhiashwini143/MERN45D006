console.log("this is our server page")

const express = require("express");
const app = express()

app.get("/api", (reg,res) =>{
    console.log("get request called")
    return res.send("get request called")
})

const port = 10000;
app.listen(port,() => {
    console.log("Our server is Running")
})