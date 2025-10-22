const User = require("../model/userModel");

const userValidation = async(req,res,text)=>{
    try{
        const token=req.header.authorization;

        // const {user_id} = await jwt.decode(token,"user_key");

        // const validUser = await User.findOne({_id:user_id});

        // if(!validUser){
        //     return res.status(404).json({
        //         status:false,
        //         message:"validation failed"
        //     })
        // }else{
        //     next();
        // }

        const decodeUser = await jwt.verify(token,"user_key");

        const validUser = await User.findById(decodeUser.user_id);

         if(!validUser){
            return res.status(404).json({
                status:false,
                message:"validation failed"
            })
        }else{
            next();
        }

    }catch(error){
        console.log("error",error)
        return res.status(500).json({
            status:false,
            message:"something gone wrong ,Error : ${error}"
        })
    }
}

module.exports = userValidation