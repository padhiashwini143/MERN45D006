const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        const mongo_url=process.env.mongo_url;
        await mongoose.connect(mongo_url);
        console.log("My Db connected")
    }catch(error){
        console.log("error",error)
    }
}

module.exports=connectDB