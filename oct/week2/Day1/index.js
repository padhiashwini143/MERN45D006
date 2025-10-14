console.log("this is my server page")


const express = require("express");
const app = express()

app.use(express.json())

app.get("/api", (reg,res) => {
    console.log("get request clicked")
    return res.send("get request called")
})

app.post("/post", (reg,res) => {
    const data = req.body;
    console.log("post request clicked",data)
    return res.send("post request called")
})

app.put("/put", (reg,res) => {
    console.log("put request clicked")
    return res.send("put request called")
})

app.delete("/delete", (reg,res) => {
    console.log("delete request clicked")
    return res.send("delete request called")
})

const port = 8000;
app.listen(port,()=>{
    console.log("My server is Running")
})
