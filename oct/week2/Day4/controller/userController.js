const User = require("../model/userModel")
const bcrypt = require("bcrypt")

exports.register = async (req, res) => {
    try {
        const { fullName, age, email, password } = req.body;

        if (!fullName || !age || !email || !password) {
            return res.status(500).json({
                status: false,
                message: "fill all the field"
            })
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500), json({
                    status: false,
                    message: "password not changed to hash"
                })
            }

            const saveUser = new User({
                fullName,
                age,
                email,
                password: hash
            });
            await saveUser.save();
            res.status(201).json({
                status: true,
                message: "successfully data saved"
            })
        });


    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: false,
            message: "some gone wrong"
        })
    }
}

exports.Login = async (res,req) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(500).json({
                sataus:false,
                message:"fill all the field"
            })
        }

        const existingUser = await User.findOne({email});

        if(!existingUser){
            return res.status(400).json({
                status:false,
                message:"Invalid email"
            })
        }

        bcrypt.compare(password, existingUser.password, function (err, result){
            if(result){
                return res.status(200).json({
                    status:true,
                    message:"login success",
                    existingUser
                })
            }else{
                return res.status(400).json({
                    status:false,
                    message:"Invalid password"
                })
            }
        });
    }catch(error){
        console.log("error", error)
        res.status(500).json({
            status:false,
            message:"some gone wrong"
        })
    }
}
exports.updateUser = async (req,res) => {
    try{
        const {id}=req.params;

        if(id){
            return res.status(500)
            .json({
                staus:false,
                message:"id must be required"
            })
        }

        const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true}).select("-password");
        if(updateUser){
            return res.status(200)
            .json({
                status:true,
                message:"successfully updated",
                updateUser
            })
        }else{
            return res.status(500)
            .json({
                status:false,
                message:"update process failed"
            })
        }
        }catch(error){
            console.log("error",error)
            return res.status(500).json({
                status:false,
                message:"some gone wrong"
            })
        }
    }

    exports.deleteUser = async (req,res) => {
        try{
            const {id} = req.params;
            if(id){
                return res.status(500)
                .json({
                    status:false,
                    message:"id must be required"
                })
            }

            const deleteUser = await User.findByIdAndDelete(id);

            if(deleteUser){
                return res.status(200)
                .json({
                    status:true,
                    message:"successfully deleted",
                    deleteUser
                })
            }else{
                return res.status(404)
                .json({
                    status:false,
                    message:"delete process failed"
                })
            }
        }catch(error){
            console.log("error",error)
            res.status(500).json({
                status:false,
                message:"some gone wrong"
            })
        }
    }

    exports.getAllUsers= async (req,res) => {
        try{
            const users=await User.find().select("-password");

            if(users.length>0){
                return res.status(200)
                .json({
                    status:true,
                    message:"successfully fetched",
                    users
                })
            }else{
                return res.status(404)
                .json({
                    status:false,
                    message:"fetching process failed"
                })
            }
            }catch(error){
                console.log("error",error)
                res.status(500).json({
                    status:false,
                    message:"some gone wrong"
                })
            }
        }
    
