const express=require("express");
const {
    register,
    Login,
    updateUser,
    deleteUser,
    getAllUsers} =require("../controller/userController");

const router = express.Router();


router.post("/register",register);
router.post("/login",Login);
router.put("/..id",updateUser);
router.delete("/..id",deleteUser);
router.get("/..id",getAllUsers);

module.exports=router