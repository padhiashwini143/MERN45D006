console.log("this is our server page")

const express = require("express");
const app = express()

app.use(express.json())

app.get("/api", (req,res) =>{
    const data=req.body;
    console.log("get request called",data)
    return res.send("get request called")
})
app.post("/post", (req,res) =>{
    const data=req.body;
    console.log("post request called",data)
    return res.send("post request called")
})
app.put("/put", (req,res) =>{
    const data=req.body;
    console.log("put request called",data)
    return res.send("put request called")
})
app.delete("/delete", (req,res) =>{
    const data=req.body;
    console.log("delete request called",data)
    return res.send("delete request called")
})

const port = 10000;
app.listen(port,() => {
    console.log("Our server is Running")
})