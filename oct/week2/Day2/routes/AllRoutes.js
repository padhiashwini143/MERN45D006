const express = require("express");
const validation = require("../middleware/validationMiddleware");
const authenticate = require("../middleware/authentication");

const router = express.Router()

router.get("/api", validation,authenticate,(req,res) => {
    console.log("get request called");
    return res.send("get response")
})

router.post("/post", (req,res) => {
    console.log("post request called",data);
    return res.send("post response")
})

router.put("/put/:id", (req,res) => {
    const id=req.params;
    // console.log("id:",id)
    // const a=req.query;
    // console.log("a:",a)
    console.log("put request called",id)
    return res.send("put response")
})

router.put("/put", (req,res) => {
    console.log("put request called")
    return res.send("put response")
})

router.delete("/delete", (req,res) => {
    console.log("delete request called")
    return res.send("delete response")
})

module.exports=router