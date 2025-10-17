const { json } = require("express");
const User = require("../model/userModel")
const bcrypt = require("bcrypt")

exports.register = async (req, res) =>{
    try{
        const {fullName, age, email, password} = req.body;

        if(!fullName || !age || !email || !password) {
            return res.status(500).json({
                status:false,
                message:"fill all the field"
            })
        }

        bcrypt.hash(password, 10, async (err, hash) =>{
            if(err) {
                return res.status(500),json({
                    status:false,
                    message:"password not changed to hash"
                })
            }

            const saveUser = new User({
                fullName,
                age,
                email,
                password:hash
            });
            await saveUser.save();
        });

        res.status(201).json({
            status:true,
            message:"successfully data saved"
        })
    }catch (error) {
        console.log("error",error)
        res.status(500).json({
            status:false,
            message:"some gone wrong"
        })
    }
}